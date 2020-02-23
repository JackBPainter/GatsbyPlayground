import React from "react"
import Header from "./Header"
import Layout from "./Layout"

export default () => (
  <Layout>
    <Header headerText="Welcome to the Gatbsy Playground" />
    <p>What a place</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)