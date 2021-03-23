import React from "react"
import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

const StyledLogo = styled.img`
  height: 60px;
`

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Logo href="/">
          <StyledLogo src="/static/images/uni-logo.svg" alt="V3 MASK" />
          <span>V3 Mask</span>
        </Logo>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: ${rem(70)} 0;
  padding: 5vh 0;
  letter-spacing: 0;
  line-height: 1;
  width: 100%;
  text-align: center;

  @media all and (max-width: 767px) {
    padding: 12px 0;
  }
`

const Logo = styled.a`
  font-size: ${(props) => rem(props.theme.fontSize.base)};
  font-weight: ${(props) => props.theme.fontWeight.black};
  text-align: center;
  font-style: italic;
  text-transform: uppercase;
  display: inline-block;

  img {
    margin-bottom: ${rem(8)};
    user-select: none;
    transition: transform 0.3s cubic-bezier(0.2, 1.64, 0.41, 0.2);
  }

  span {
    display: block;
  }

  @media all and (min-width: 768px) {
    &:hover {
      img {
        transform: translate3d(0, -10px, 0);
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  @media all and (max-width: 767px) {
    span {
      display: none;
    }

    img {
      margin-bottom: 0;
      width: 22px;
    }
  }
`

export default Header
