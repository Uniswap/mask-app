import React, { useState } from "react"
import styled from "styled-components"
import { rem } from "polished"
import { Grid } from "react-styled-flexboxgrid"

import Info from "./Info"
import Sandbox from "./Sandbox"
import Card from "../components/Card"
import Section from "../components/Section"

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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: ${rem(520)};
  height: 55vh;
  min-height: ${rem(500)};
  transform: translate3d(0, 0, 0);
  background-color: ${(props) => props.theme.colors.odd};

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

  @media all and (max-width: 1024px) {
    min-height: ${rem(480)};
  }

  @media all and (max-width: 767px) {
    height: auto;
    min-height: 0;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    background-color: ${(props) => props.theme.colors.white};

    ${Card} {
      flex: 0 0 100%;
      height: auto;
      background-color: ${(props) => props.theme.colors.odd};

      &:first-child {
        // height: 400px;
        margin-bottom: 30px;
        background-color: ${(props) => props.theme.colors.white};
      }
    }
  }

  @media all and (max-width: 480px) {
    ${Card} {
      min-height: 0;

      // &:first-child {
      //   height: 256px;
      // }
    }
  }
`

export default Playground
