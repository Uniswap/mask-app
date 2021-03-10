import React from "react"
import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */

const Wrapper = styled.header`
  padding: ${rem(70)} 0;
  letter-spacing: 0;
  line-height: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 767px) {
    padding: 12px 0;
  }
`

const Logo = styled.div`
  font-size: ${(props) => rem(props.theme.fontSize.base)};
  font-weight: ${(props) => props.theme.fontWeight.black};
  text-align: center;
  font-style: italic;
  text-transform: uppercase;

  img {
    margin-bottom: ${rem(8)};
    user-select: none;
  }

  span {
    display: block;
  }

  @media all and (max-width: 767px) {
    span {
      display: none;
    }

    img {
      margin-bottom: 0;
    }
  }
`

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Logo>
          <img src="/static/images/logo.svg" alt="Optimisim mask" />
          <span>Optimisim mask</span>
        </Logo>
      </Grid>
    </Wrapper>
  )
}

export default Header
