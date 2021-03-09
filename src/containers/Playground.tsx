import React, { useState } from "react"

import Info from "./Info"
import Sandbox from "./Sandbox"

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  return (
    <>
      <Sandbox file={file} />
      <Info onDrop={onDrop} />
    </>
  )
}

export default Playground
