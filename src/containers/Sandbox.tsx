import React, { useRef, useState } from "react"
import { Stage, Layer } from "react-konva"
import { Vector2d } from "konva/types/types"
import { not } from "ramda"

import {
  CONTROLLER_ROTATION,
  CONTROLLER_SIZE,
  MASK_HEIGHT,
  MASK_WIDTH,
  SCALE_FACTOR,
  STAGE_HEIGHT,
  STAGE_WIDTH,
} from "../helpers/const"

import { download } from "../helpers/utils"

import IconEdit from "../icons/IconEdit"
import IconSave from "../icons/IconSave"

import Figure from "../components/Figure"
import Button, { ButtonColor, ButtonSize } from "../components/Button"

import Controller from "./Controller"

interface Props {
  file?: string
}

const Sandbox: React.FC<Props> = ({ file }: Props) => {
  const stageRef = useRef<any>(null)

  const [edit, setEdit] = useState<boolean>(false)
  const [rotation, setRotation] = useState<number>(CONTROLLER_ROTATION)
  const [scale, setScale] = useState<Vector2d>({ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE })

  const onScale = (scale: number) => {
    setScale({
      x: scale,
      y: scale,
    })
  }

  const onEdit = () => {
    setEdit(not(edit))
  }

  const onSave = () => {
    if (stageRef?.current) {
      download(stageRef.current.toDataURL())
    }
  }

  return (
    <>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef}>
        <Layer>
          {file ? <Figure fit src={file} /> : null}
          <Figure
            draggable
            scale={scale}
            rotation={rotation}
            src="/static/stripe.svg"
            offsetX={MASK_WIDTH / SCALE_FACTOR}
            offsetY={MASK_HEIGHT / SCALE_FACTOR}
          />
        </Layer>
      </Stage>

      {edit ? (
        <Controller rotation={rotation} scale={scale.x} onRotation={setRotation} onScale={onScale} onClose={onEdit} />
      ) : null}

      <Button $color={ButtonColor.Black} $size={ButtonSize.Lg} onClick={onEdit}>
        <IconEdit />
        Edit effect
      </Button>

      <Button $color={ButtonColor.Red} $size={ButtonSize.Lg} onClick={onSave}>
        <IconSave />
        Save photo
      </Button>
    </>
  )
}

export default Sandbox
