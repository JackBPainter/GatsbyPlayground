import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Layout from './components/Layout'

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <StyledMain>
    <Layout>
      <Header headerText="Welcome to the Gatbsy Playground" />
      <p>What a place</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  </StyledMain>
)