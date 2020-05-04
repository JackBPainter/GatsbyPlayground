import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const About = ({ data }) => ( // The destructured data prop contains the results of the graphql query
  <Layout>
    <Header headerText="About Gatsby" />
    <Header headerText={data.site.siteMetadata.title} />
    <p>Such wow. Very React.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About