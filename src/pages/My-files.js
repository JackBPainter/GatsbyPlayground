import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const MyFiles = ({ data }) => {
    return (
        <Layout>
            <div>
                <h1>My sites files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>size</th>
                            <th>relativePath</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.id}</td>
                                <td>{node.name}</td>
                                <td>{node.size}</td>
                                <td>{node.relativePath}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    id
                    name
                    size
                    relativePath
                    parent {
                        id
                    }
                }
            }
        }
    }
`;

export default MyFiles