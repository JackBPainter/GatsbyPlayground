import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledList = styled.li`
    display: 'inline-block';
    margin-right: '1rem';
`

const ListLink = props => (
    <StyledList>
        <Link to={props.to}>{props.children}</Link>
    </StyledList>
)

export default ListLink