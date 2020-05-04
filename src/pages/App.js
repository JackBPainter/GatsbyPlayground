import React, { useState, useRef } from "react";
import { useOnOutsideClick } from "../hooks/hooks";
import { graphql } from "gatsby";
import styled from "styled-components"

import Burger from "../components/BurgerMenu/Burger";
import Menu from "../components/BurgerMenu/Menu";
import Header from "../components/Header";
import Layout from "../components/Layout";

const StyledH3 = styled.h3`
    margin-bottom: 1rem;
`

const StyledSpan = styled.span`
    color: #bbb;
`
 
const App = ({ data }) => {
    const [open, setOpen] = useState(false),
        node = useRef();

    useOnOutsideClick(node, () => setOpen(false));

    console.log(data);

    return (
        <div>
            <Layout>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <Header headerText="Welcome to the Gatbsy Playground" />
                <p>We really like to blog about Pandas here</p>
                <h4>{data.allMarkdownRemark.totalCount} posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <StyledH3>
                            {node.frontmatter.title}{" "}
                            <StyledSpan> - {node.frontmatter.date}</StyledSpan>
                        </StyledH3>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
                <img
                    src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                    alt="Group of pandas eating bamboo"
                    style={{ width: "50%" }}
                />
                {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
            </Layout>
        </div>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                    timeToRead
                    html
                    id
                    __typename
                    wordCount {
                        paragraphs
                        sentences
                        words
                    }
                }
            }
        }
    }
`;

export default App