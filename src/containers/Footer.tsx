import React from "react"
import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Social from "./Social"

const Wrapper = styled.footer`
  padding: ${rem(50)} 0;
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

  @media all and (min-width: 581px) {
  }
`

const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
  opacity: 0.4;
  text-align: center;
  width: ${rem(840)};
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Social />
        <Disclaimer>
          f2pool & stakefish take privacy very seriously. The “OPTIMISIM MASK” app is provided for fun and convenience.
          We never store photos, and do not transmit any data besides an anonymous identifier containing no personal
          information. We have also made the source code available in the event you would like to review it.
        </Disclaimer>
      </Grid>
    </Wrapper>
  )
}

export default Footer
