import React from "react"

import Layout from "./Layout"

import Header from "../containers/Header"
import Playground from "../containers/Playground"
import Footer from "../containers/Footer"
import Main from "../components/Main"

const App: React.FC = () => {
  return (
    <Layout>
      <Main>
        <Header />
        <Playground />
        <Footer />
      </Main>
    </Layout>
  )
}

export default App
