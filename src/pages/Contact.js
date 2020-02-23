import React from "react"
import { Link } from "gatsby"
import Header from "./components/Header"
import Container from "./components/Container"

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <Header headerText="Call me maybe!" />
    <p>Send us a message!</p>
  </Container>
)