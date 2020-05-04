import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import ListLink from "./ListLink";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledMain = styled.main`
  background: white;
  width: 600px;
  height: 100vh;
  max-width: 600px;
  position: absolute;
  z-index: -1;
`;

const StyledH2 = styled.h2`
  margin: 2rem 0;
`;

const StyledH3 = styled.h3`
  text-shadow: none;
  background: none;
  cursor: default;
`;

const StyledUL = styled.ul`
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <StyledDiv>
      <StyledMain />
      <StyledH2>
        <Link to="/">
          <StyledH3>{data.site.siteMetadata.title}</StyledH3>
        </Link>
        <StyledUL>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/About">About</ListLink>
          <ListLink to="Contact">Contact</ListLink>
        </StyledUL>
      </StyledH2>
      {children}
    </StyledDiv>
  );
};
