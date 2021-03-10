import { isNil } from "ramda"

import { nets, detectSingleFace, TinyFaceDetectorOptions, Point, IPoint } from "face-api.js"

import { FILE_NAME, SCALE_FACTOR, STAGE_HEIGHT, STAGE_WIDTH, ONE_RADIAN_IN_DEGREES, CONTROLLER_ROTATION } from "./const"

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

export const average = (points: Point[] | undefined): IPoint | undefined => {
  if (isNil(points)) {
    return undefined
  }

  const { x, y } = points.reduce(
    (total, point) => ({
      x: total.x + point.x,
      y: total.y + point.y,
    }),
    { x: 0, y: 0 }
  )

  return {
    x: x / points.length,
    y: y / points.length,
  }
}

export const angleBetweenPoints = (left: IPoint, right: IPoint) => {
  const dy = right.y - left.y
  const dx = right.x - left.x
  const theta = Math.atan2(dy, dx)

  return theta * ONE_RADIAN_IN_DEGREES
}

export const loadModels = async () => {
  try {
    await Promise.all([nets.tinyFaceDetector.loadFromUri("/models"), nets.faceLandmark68Net.loadFromUri("/models")])
  } catch (error) {
    console.error(error)
  }
}

export const detectFace = async (stage: any) => {
  const face = stage.querySelector("canvas") as HTMLCanvasElement
  const detector = await detectSingleFace(face, new TinyFaceDetectorOptions()).withFaceLandmarks()

  const left = average(detector?.landmarks.getLeftEye())
  const right = average(detector?.landmarks.getRightEye())
  const nose = average(detector?.landmarks.getNose())

  if (left && right && nose) {
    return {
      coordinates: {
        x: nose.x / SCALE_FACTOR,
        y: Math.min(left.y, right.y) / SCALE_FACTOR,
      },
      rotation: angleBetweenPoints(left, right),
    }
  }

  return {
    coordinates: {
      x: STAGE_WIDTH / SCALE_FACTOR,
      y: STAGE_HEIGHT / SCALE_FACTOR,
    },
    rotation: CONTROLLER_ROTATION,
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
