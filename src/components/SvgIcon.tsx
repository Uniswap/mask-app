import styled from "styled-components"
import { rem } from "polished"

export enum SvgIconSize {
  Xs,
  Md,
  Lg,
}

export interface SvgIconProps {
  $size?: SvgIconSize
  children: JSX.Element | JSX.Element[]
}

const SvgIcon = styled.svg<SvgIconProps>`
  width: ${rem(20)};
  height: ${rem(20)};
  display: inline-block;
  vertical-align: middle;
  margin-right: ${rem(10)};
  transition: opacity ${(props) => props.theme.transition.base};

  ~ span {
    display: inline-block;
    vertical-align: middle;
  }

  path {
    transition: fill ${(props) => props.theme.transition.base};
  }
`

export default SvgIcon
