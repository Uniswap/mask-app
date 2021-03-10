import React from "react"
import { useDropzone } from "react-dropzone"
import { Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Button, { ButtonColor, ButtonSize } from "../components/Button"
import { IconInfo, IconYoutube } from "../icons"

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <h1>Optimism mask</h1>
          <p>
            Do you part to support Optimistic Rollups <br />
            for Ethereum's better scaling tomorrow! Upload <br />
            your photo, choose your mask, and download <br />
            or share with the Twitter button!
          </p>
          <Links>
            <a href="https://optimism.io/" target="_blank" rel="noreferrer">
              <IconInfo />
              <span>Optimistic rollups</span>
            </a>
            <a href="https://youtu.be/97DU_YgNPgE" target="_blank" rel="noreferrer">
              <IconYoutube />
              <span>Video explainer</span>
            </a>
          </Links>
          <Divider />
          <UploadWrapper>
            <div>
              <Button $color={ButtonColor.White} $size={ButtonSize.Lg} {...getRootProps()}>
                Choose the file
                <input {...getInputProps()} accept="image/*" />
              </Button>
              <Hint>or drag and drop your file here</Hint>
            </div>
          </UploadWrapper>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  ${Row} {
    height: 100%;
  }

  p {
    font-size: ${(props) => rem(props.theme.fontSize.lead)};
    margin-bottom: ${rem(28)};
  }

  @media all and (max-width: 480px) {
    p {
      margin-bottom: 20px;
    }
  }
`

const Links = styled.div`
  padding-bottom: ${rem(10)};

  svg path {
    fill: ${(props) => props.theme.colors.primary};
    transition: fill ${(props) => props.theme.transition.base};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    padding: ${rem(10)};

    & + a {
      margin-left: ${rem(12)};
    }

    &:hover {
      color: #de0000;

      svg path {
        fill: #de0000;
      }
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 24px;
    padding-bottom: 0;
  }
`

const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  width: ${rem(90)};
  margin: ${rem(30)} auto;

  @media all and (max-width: 767px) {
    display: none;
  }
`

const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 0.4;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 767px) {
    display: none;
  }
`

const UploadWrapper = styled.div`
  padding: ${rem(20)};
  height: ${rem(148)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media all and (max-width: 768px) {
    input {
      display: block !important;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }
  }

  @media all and (max-width: 767px) {
    height: auto;
    padding: 0;
  }

  @media all and (max-width: 480px) {
    display: block;

    ${Button} {
      width: 100%;
    }
  }
`

export default Info
