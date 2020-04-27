import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    margin: 1rem 0;
`

const Header = props => (
    <StyledHeader>{props.headerText}</StyledHeader>
)

export default Header