import React from "react"
import { Link } from "gatsby"
import Header from "./components/Header"
import Container from "./components/Container"

export default () => (
  <Container>
    <Link to="/Contact/">Contact</Link>
    <Header headerText="Welcome to the Gatbsy Playground" />
    <p>What a place</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Container>
)