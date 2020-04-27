import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyles } from "../styles/global"


import Header from "./components/Header"
import Layout from "./components/Layout"

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <>
      <Layout>
        <Header headerText="Welcome to the Gatbsy Playground" />
        <p>What a place</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </Layout>
      </>
  </ThemeProvider>
)
