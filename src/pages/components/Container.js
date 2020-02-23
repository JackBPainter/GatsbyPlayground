import React from "react"

export default ({ children }) => (
  <div 
    style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h3 style={{ margin: '1rem 0'}}>Gatsby Playground</h3>
    {children}
  </div>
)