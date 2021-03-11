import React from "react"
import useImage from "use-image"
import { head } from "ramda"
import { Image } from "react-konva"
import { Vector2d } from "konva/types/types"

import { scaleFigure } from "../helpers/utils"
import { KonvaEventObject } from "konva/types/Node"

/**
 * Types
 */
interface Props {
  x?: number
  y?: number
  offsetX?: number
  offsetY?: number
  rotation?: number
  scale?: Vector2d
  src?: string
  fit?: boolean
  draggable?: boolean
  onMouseEnter?: (event: KonvaEventObject<MouseEvent>) => void
  onMouseLeave?: (event: KonvaEventObject<MouseEvent>) => void
  onMouseDown?: (event: KonvaEventObject<MouseEvent>) => void
  onMouseUp?: (event: KonvaEventObject<MouseEvent>) => void
  onDragMove?: (event: KonvaEventObject<DragEvent | TouchEvent>) => void
}

const Figure: React.FC<Props> = ({
  fit,
  src,
  rotation,
  scale,
  draggable,
  x,
  y,
  offsetX,
  offsetY,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onDragMove,
  ...rest
}: Props) => {
  const meta = useImage(src as string)
  const image = head(meta) as HTMLImageElement
  const config = fit ? scaleFigure(image) : rest

  return (
    <Image
      x={x}
      y={y}
      offsetX={offsetX}
      offsetY={offsetY}
      image={image}
      draggable={draggable}
      scale={scale}
      rotation={rotation}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onDragEnd={onDragMove}
      {...config}
    />
  )
}

export default Figure
