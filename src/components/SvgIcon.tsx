import styled from "styled-components"

export enum SvgIconSize {
  Xs,
  Md,
  Lg,
}

export interface SvgIconProps {
  $size?: SvgIconSize
  children: JSX.Element | JSX.Element[]
}

const SvgIcon = styled.svg<SvgIconProps>``

export default SvgIcon
