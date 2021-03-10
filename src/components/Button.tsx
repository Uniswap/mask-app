import styled, { css } from "styled-components"
import { rem } from "polished"

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

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  padding: ${rem(14)} ${rem(24)};
  justify-content: center;
  align-items: center;
  color: inherit;
  letter-spacing: 0;
  border: 0;
  font-family: inherit;
  font-size: ${(props) => rem(props.theme.fontSize.base)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  appearance: none;
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transition.base};
  outline: none !important;

  @media all and (max-width: 480px) {
    font-size: 11px;
    padding: 9px 12px;
  }

  ${(props) =>
    props.$color === ButtonColor.White &&
    css`
      background-color: ${props.theme.colors.white};
      color: ${props.theme.colors.black};

      svg path {
        fill: ${props.theme.colors.black};
      }

      &:hover {
        background-color: #e5e5e5;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Red &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};

      svg path {
        fill: ${props.theme.colors.white};
      }

      &:hover {
        background-color: #de0000;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Black &&
    css`
      background-color: ${props.theme.colors.dark};
      color: ${props.theme.colors.white};

      svg path {
        fill: ${props.theme.colors.white};
      }

      &:hover {
        background-color: #353535;
      }
    `}

    ${(props) =>
    props.$color === ButtonColor.Gray &&
    css`
      background-color: #f3f3f3
      color: ${props.theme.colors.white};

      svg path {
        fill: ${props.theme.colors.white};
      }

      &:hover {
        background-color: #e5e5e5;
      }
    `}

  ${(props) =>
    props.$size === ButtonSize.Lg &&
    css`
      text-transform: uppercase;
      letter-spacing: ${rem(2)};
      padding: ${rem(20)} ${rem(24)};
      font-size: ${rem(12)};
      font-weight: ${(props) => props.theme.fontWeight.extrabold};

      @media all and (max-width: 480px) {
        font-size: 8px;
        padding: 12px 20px;
      }
    `}

  ${(props) =>
    props.$size === ButtonSize.Xs &&
    css`
      padding: ${rem(8)} ${rem(16)};
      font-size: ${rem(10)};
      font-weight: ${(props) => props.theme.fontWeight.bold};

      @media all and (max-width: 767px) {
        font-size: 10px;
        padding: 9px 12px;
      }
    `}
`

export default Button
