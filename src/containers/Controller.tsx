import React from "react"
import { SliderInput, SliderTrack, SliderRange, SliderHandle, SliderMarker } from "@reach/slider"

import {
  CONTROLLER_ROTATION_MAX,
  CONTROLLER_ROTATION_MIN,
  CONTROLLER_SIZE_MIN,
  CONTROLLER_SIZE_MAX,
  CONTROLLER_SIZE_STEP,
} from "../helpers/const"

import Button, { ButtonColor, ButtonSize } from "../components/Button"

interface Props {
  rotation: number
  scale: number
  onScale: (size: number) => void
  onRotation: (angle: number) => void
  onClose: () => void
}

const Controller: React.FC<Props> = ({ rotation, scale, onRotation, onScale, onClose }: Props) => {
  return (
    <>
      <SliderInput value={rotation} min={CONTROLLER_ROTATION_MIN} max={CONTROLLER_ROTATION_MAX} onChange={onRotation}>
        <SliderTrack>
          <SliderRange />
          <SliderMarker value={rotation} />
          <SliderHandle />
        </SliderTrack>
      </SliderInput>

      {rotation}

      <SliderInput
        value={scale}
        min={CONTROLLER_SIZE_MIN}
        max={CONTROLLER_SIZE_MAX}
        step={CONTROLLER_SIZE_STEP}
        onChange={onScale}
      >
        <SliderTrack>
          <SliderRange />
          <SliderMarker value={scale} />
          <SliderHandle />
        </SliderTrack>
      </SliderInput>

      {scale}

      <Button $color={ButtonColor.Gray} $size={ButtonSize.Xs} onClick={onClose}>
        Save
      </Button>
    </>
  )
}

export default Controller
