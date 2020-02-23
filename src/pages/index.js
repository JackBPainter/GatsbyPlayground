import React from "react"
import Header from "./components/Header"
import Layout from "./components/Layout"

export default () => (
  <Layout>
    <Header headerText="Welcome to the Gatbsy Playground" />
    <p>What a place</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)