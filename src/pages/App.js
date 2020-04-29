import React, { useState, useRef } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/global"
import { theme } from "../styles/theme"
import { useOnOutsideClick } from "../hooks/hooks"

import Burger from "./components/BurgerMenu/Burger"
import Menu from "./components/BurgerMenu/Menu"
import Header from "./components/Header"
import Layout from "./components/Layout"

const App = () => {
  const [open, setOpen] = useState(false),
  node = useRef()

  useOnOutsideClick(node, () => setOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Layout>
          <Header headerText="Welcome to the Gatbsy Playground" />
          <p>What a place</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default App
