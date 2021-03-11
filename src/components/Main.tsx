import styled from "styled-components"

const Main = styled.main`
  min-height: 100vh;

  @media all and (max-width: 580px) {
    position: relative;
  }

  @media all and (min-width: 581px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
`

export default Main
