import styled from "styled-components"

/**
 * Types
 */
export interface SectionProps {}

const Section = styled.section<SectionProps>`
  position: relative;
  width: 100%;

  @media all and (max-width: 767px) {
    flex: 1;
  }
`

export default Section
