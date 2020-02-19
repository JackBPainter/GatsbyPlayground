import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="Call me maybe!" />
    <p>Send us a message!</p>
  </div>
)