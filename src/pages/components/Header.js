import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    margin: 0.5rem;
`

const Header = props => (
    <StyledHeader>{props.headerText}</StyledHeader>
)

export default Header