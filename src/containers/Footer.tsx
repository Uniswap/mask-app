import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Social from "./Social"

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
            <Social />
          </Col>
          <Col xs={12} sm={8}>
            <Disclaimer>
              stakefish & f2pool take privacy very seriously. The “OPTIMISM MASK” app is provided for fun and
              convenience. We never store photos, and do not transmit any data besides an anonymous identifier
              containing no personal information. We have also made the source code available in the event you would
              like to review it.
            </Disclaimer>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: ${rem(50)} 0;
  padding: 4vh 0;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.dark};
  text-align: left;

  &:empty {
    display: none;
  }

  @media all and (max-width: 480px) {
    padding: 16px 0;
  }
`

const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
  opacity: 0.4;
`

export default Footer
