import React, { useEffect, useRef, useState } from "react"
import { Stage, Layer } from "react-konva"
import { Vector2d } from "konva/types/types"
import { not } from "ramda"
import styled from "styled-components"

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

import { slideUp } from "../core/GlobalStyles"

import { IconEdit, IconSave, IconShare } from "../icons"
import Figure from "../components/Figure"
import Button, { ButtonColor, ButtonSize } from "../components/Button"

import Controller from "./Controller"
import { KonvaEventObject } from "konva/types/Node"

interface Props {
  file?: string
}
interface WrapperProps {
  preview?: string
  cursor: Cursor
}

export enum Cursor {
  Default,
  Grab,
  Grabbing,
}

const CURSORS = new Map<Cursor, "initial" | "grab" | "grabbing">([
  [Cursor.Default, "initial"],
  [Cursor.Grab, "grab"],
  [Cursor.Grabbing, "grabbing"],
])

const Sandbox: React.FC<Props> = ({ file }: Props) => {
  const stageRef = useRef<any>(null)

  const [coordinates, setCoordinates] = useState<Vector2d>({
    x: 263,
    y: 180,
  })

  const [edit, setEdit] = useState<boolean>(false)
  const [rotation, setRotation] = useState<number>(CONTROLLER_ROTATION)
  const [scale, setScale] = useState<Vector2d>({ x: CONTROLLER_SIZE * 1.1, y: CONTROLLER_SIZE * 1.1 })
  const [cursor, setCursor] = useState<Cursor>(Cursor.Default)

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

  const onDragMove = ({ target }: KonvaEventObject<DragEvent | TouchEvent>) => {
    setCoordinates({
      x: target.x(),
      y: target.y(),
    })
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
    <Wrapper preview={file} cursor={cursor}>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef} className="stage">
        <Layer>
          <Figure fit src={file || "/static/images/default.jpg"} />
          <Figure
            draggable
            scale={scale}
            rotation={rotation}
            src="/static/images/unicorn.png"
            x={coordinates?.x}
            y={coordinates?.y}
            offsetX={MASK_WIDTH / SCALE_FACTOR}
            offsetY={MASK_HEIGHT / SCALE_FACTOR}
            onMouseEnter={() => setCursor(Cursor.Grab)}
            onMouseLeave={() => setCursor(Cursor.Default)}
            onMouseDown={() => setCursor(Cursor.Grabbing)}
            onMouseUp={() => setCursor(Cursor.Default)}
            onDragMove={onDragMove}
          />
        </Layer>
      </Stage>

      {file ? (
        <Actions>
          <Relative>
            {edit ? (
              <Controller
                rotation={rotation}
                scale={scale.x}
                onRotation={setRotation}
                onScale={onScale}
                onClose={onEdit}
              />
            ) : null}

            <Button $color={ButtonColor.Black} $size={ButtonSize.Md} onClick={onEdit}>
              <IconEdit />
              Edit effect
            </Button>
          </Relative>

          <Relative>
            <Button $color={ButtonColor.Red} $size={ButtonSize.Md} onClick={onSave}>
              <IconSave />
              Save
            </Button>
          </Relative>
          <Relative>
            <Button
              $color={ButtonColor.Red}
              $size={ButtonSize.Md}
              as="a"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/intent/tweet?url=uniswap.org&text=Uniswap%20V3%20is%20here.%20Read%20the%20announcement%20blog%20post%20%F0%9F%A6%84%F0%9F%A6%84"
            >
              <IconShare />
              Share
            </Button>
          </Relative>
        </Actions>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  background-image: ${(props) => `url(${props.preview})` || "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  cursor: ${(props) => CURSORS.get(props.cursor)};

  &:before {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(18px);
  }

  .stage,
  .konvajs-content,
  canvas {
    width: 100% !important;
    object-fit: cover;
  }

  @media all and (min-width: 481px) {
    height: 100% !important;

    .stage,
    .konvajs-content,
    canvas {
      height: 100% !important;
    }
  }

  @media all and (max-width: 480px) {
    overflow: visible;
    transform: none;
  }
`

const Actions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;

  @media all and (max-width: 480px) {
    position: static;
  }
`

const Relative = styled.div`
  position: relative;
  width: 50%;

  &:first-child {
    flex: 0 0 50%;
  }

  ${Button} {
    width: 100%;
  }

  > ${Button} {
    transform: translate3d(0, 100%, 0);
    border-left: 1px solid #000;
    animation: 0.3s ${slideUp} forwards 1s ease;
  }

  &:nth-child(2) {
    > ${Button} {
      animation-delay: 1.1s;
    }
  }

  &:last-child {
    > ${Button} {
      animation-delay: 1.2s;
    }
  }

  @media all and (max-width: 480px) {
    position: static;
    overflow: hidden;
  }
`

export default Sandbox
