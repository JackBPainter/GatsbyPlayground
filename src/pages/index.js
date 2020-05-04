import React from "react"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyles } from "../styles/global"

const Index = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
)

export default Index