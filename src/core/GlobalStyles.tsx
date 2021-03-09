import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

const GlobalStyles = createGlobalStyle`
  ${normalize()}
`

export default GlobalStyles
