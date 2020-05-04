import React from "react"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyles } from "../styles/global"

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
)
