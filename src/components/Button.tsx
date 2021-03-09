import styled from "styled-components"

export enum ButtonSize {
  Xs,
  Sm,
  Md,
  Lg,
}

export enum ButtonColor {
  White,
  Gray,
  Red,
  Black,
}

export interface ButtonProps {
  $size?: ButtonSize
  $color?: ButtonColor
}

const Button = styled.button<ButtonProps>``

export default Button
