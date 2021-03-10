import React, { useState } from "react"
import styled from "styled-components"
import { rem } from "polished"
import { Grid } from "react-styled-flexboxgrid"

import Info from "./Info"
import Sandbox from "./Sandbox"
import Card from "../components/Card"
import Section from "../components/Section"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: ${rem(520)};
  background: ${(props) => props.theme.colors.odd};

  ${Card} {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    height: 100%;
    flex: 0 0 50%;

    &:first-child {
      padding: 0;
    }
  }

  @media all and (min-width: 1025px) {
  }
`

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  return (
    <Section>
      <Grid>
        <Wrapper>
          <Card>
            <Sandbox file={file} />
          </Card>
          <Card>
            <Info onDrop={onDrop} />
          </Card>
        </Wrapper>
      </Grid>
    </Section>
  )
}

export default Playground
