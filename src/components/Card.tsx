import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  padding: ${rem(54)} ${rem(40)};
  position: relative;

  @media all and (max-width: 767px) {
    padding: 24px 20px 16px;
  }
`

export default Card
