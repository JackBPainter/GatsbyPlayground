import React from "react"
import { Link } from "gatsby"
import ListLink from "./ListLink"

const Layout = ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h2 style={{ margin: '2rem 0'}}>
      <Link to="/" style={{ textShadow: "none", background: "none" }}>
        <h3>Gatsby Playground</h3>
      </Link>
      <ul style={{ margin: '0 auto', marginBottom: '2rem' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/About">About</ListLink>
        <ListLink to="Contact">Contact</ListLink>
      </ul>
    </h2>
    {children}
  </div>
)

export default Layout
