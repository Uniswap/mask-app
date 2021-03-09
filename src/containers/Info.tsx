import React from "react"
import { useDropzone } from "react-dropzone"

import Button, { ButtonColor, ButtonSize } from "../components/Button"

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <>
      <Button $color={ButtonColor.White} $size={ButtonSize.Lg} {...getRootProps()}>
        Choose the file
        <input {...getInputProps()} accept="image/*" />
      </Button>
    </>
  )
}

export default Info
