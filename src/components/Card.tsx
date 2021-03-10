import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  padding: ${rem(54)} ${rem(40)};
  position: relative;

  @media all and (max-width: 580px) {
    padding: 15px 22px;
  }
`

export default Card
