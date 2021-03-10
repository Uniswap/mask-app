import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../helpers/theme"

import { GlobalStyles } from "./GlobalStyles"
import { GlobalFonts } from "./GlobalFonts"

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <style>{GlobalFonts}</style>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
