import { isNil } from "ramda"

import { FILE_NAME, SCALE_FACTOR, STAGE_HEIGHT, STAGE_WIDTH } from "./const"

export const scaleFigure = (image?: HTMLImageElement) => {
  if (isNil(image)) {
    return null
  }

  const ratio = Math.min(STAGE_WIDTH / image.width, STAGE_HEIGHT / image.height)
  const x = STAGE_WIDTH / SCALE_FACTOR - (image.width / SCALE_FACTOR) * ratio
  const y = STAGE_HEIGHT / SCALE_FACTOR - (image.height / SCALE_FACTOR) * ratio

  const width = image.width * ratio
  const height = image.height * ratio

  return {
    x,
    y,
    width,
    height,
  }
}

export const download = (uri: string) => {
  const element = document.createElement("a")

  element.setAttribute("href", uri)
  element.setAttribute("download", FILE_NAME)
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
