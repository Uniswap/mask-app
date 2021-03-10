import React from "react"
import useImage from "use-image"
import { head } from "ramda"
import { Image } from "react-konva"
import { Vector2d } from "konva/types/types"

import { scaleFigure } from "../helpers/utils"

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
}

const Figure: React.FC<Props> = ({ fit, src, rotation, scale, draggable, x, y, offsetX, offsetY, ...rest }: Props) => {
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
      {...config}
    />
  )
}

export default Figure
