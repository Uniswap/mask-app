import { createGlobalStyle, keyframes } from "styled-components"
import { normalize, rem } from "polished"

export const GlobalStyles = createGlobalStyle`
  ${normalize()};

  html {

    @media all and (min-width: 1441px) {
      font-size: 20px;
    }

    @media all and (min-width: 1600px) {
      font-size: 22px;
    }

    @media all and (max-width: 1040px), (min-width: 1441px) and (max-height: 1040px) {
      font-size: 14px
    }

    @media all and (max-width: 840px) {
      font-size: 12px
    }

    @media all and (max-width: 480px) {
      font-size: 10px
    }
  }

  body {
    position: relative;
    min-height: 100vh;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    font-size: ${(props) => rem(props.theme.fontSize.base)};
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
    direction: ltr;
    overscroll-behavior: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

  }

  h1, h2, h3, h4, h5 {
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none !important;
    transition: all ${(props) => props.theme.transition.base};
  }

  p {
    margin-top: 0;
  }

  h1 {
    margin-bottom: ${rem(10)};
    font-weight: ${(props) => props.theme.fontWeight.black};
    font-size: ${(props) => rem(props.theme.fontSize.h1)};
    line-height: 1;

    @media all and (max-width: 767px) {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`

export const slideUp = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`

export const slideUpPopover = keyframes`
  0% {
    transform: translate3d(-50%, 20px, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
`
