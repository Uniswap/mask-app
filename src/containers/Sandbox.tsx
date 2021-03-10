import React, { useEffect, useRef, useState } from "react"
import { Stage, Layer } from "react-konva"
import { Vector2d } from "konva/types/types"
import { not } from "ramda"
import styled from "styled-components"
import { rem } from "polished"

import {
  CONTROLLER_ROTATION,
  CONTROLLER_SIZE,
  MASK_HEIGHT,
  MASK_WIDTH,
  RENDER_TIME,
  SCALE_FACTOR,
  STAGE_HEIGHT,
  STAGE_WIDTH,
} from "../helpers/const"

import { download, detectFace, loadModels } from "../helpers/utils"

import { IconEdit, IconSave } from "../icons"

import Figure from "../components/Figure"
import Button, { ButtonColor, ButtonSize } from "../components/Button"

import Controller from "./Controller"

interface Props {
  file?: string
}

const Sandbox: React.FC<Props> = ({ file }: Props) => {
  const stageRef = useRef<any>(null)

  const [coordinates, setCoordinates] = useState<Vector2d>()
  const [edit, setEdit] = useState<boolean>(false)
  const [rotation, setRotation] = useState<number>(CONTROLLER_ROTATION)
  const [scale, setScale] = useState<Vector2d>({ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE })

  const onDetect = async () => {
    try {
      const data = await detectFace(stageRef?.current?.content)
      setRotation(data.rotation)
      setCoordinates(data.coordinates)
    } catch (error) {}
  }

  const onEdit = () => {
    setEdit(not(edit))
  }

  const onScale = (scale: number) => {
    setScale({
      x: scale,
      y: scale,
    })
  }

  const onSave = () => {
    if (stageRef?.current) {
      download(stageRef.current.toDataURL())
    }
  }

  useEffect(() => {
    loadModels()
  }, [])

  useEffect(() => {
    if (file) {
      /** @todo refactor this */
      setTimeout(onDetect, RENDER_TIME)
    }
  }, [file])

  return (
    <Wrapper>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef}>
        <Layer>
          {file ? <Figure fit src={file} /> : null}
          <Figure
            draggable
            scale={scale}
            rotation={rotation}
            src="/static/stripe.svg"
            x={coordinates?.x}
            y={coordinates?.y}
            offsetX={MASK_WIDTH / SCALE_FACTOR}
            offsetY={MASK_HEIGHT / SCALE_FACTOR}
          />
        </Layer>
      </Stage>

      {edit ? (
        <Controller rotation={rotation} scale={scale.x} onRotation={setRotation} onScale={onScale} onClose={onEdit} />
      ) : null}

      <Actions>
        <Button $color={ButtonColor.Black} $size={ButtonSize.Md} onClick={onEdit}>
          <IconEdit />
          Edit effect
        </Button>

        <Button $color={ButtonColor.Red} $size={ButtonSize.Md} onClick={onSave}>
          <IconSave />
          Save photo
        </Button>
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: ${rem(48)};

  .konvajs-content,
  canvas {
    width: 100% !important;
    object-fit: cover;
  }
`

const Actions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  ${Button} {
    width: 50%;
  }

  @media all and (min-width: 1025px) {
  }
`

export default Sandbox
