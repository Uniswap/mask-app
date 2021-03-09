import React from "react"

import Layout from "./Layout"

import Header from "../containers/Header"
import Playground from "../containers/Playground"
import Footer from "../containers/Footer"

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Playground />
      <Footer />
    </Layout>
  )
}

export default App
