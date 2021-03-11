import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  @media all and (max-width: 580px) {
    position: relative;
  }
`

export default Main
