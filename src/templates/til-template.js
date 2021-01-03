import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TIL from "../components/TIL";

const TILTemplate = () => {
    const {
        allMarkdownRemark: { edges: data }
    } = useStaticQuery(graphql`
        query TilListQuery {
            allMarkdownRemark(
                filter: { frontmatter: { template: { eq: "til" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        html
                        frontmatter {
                            subject
                            date
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout type="til">
            <SEO title="TIL" />
            <TIL data={data} />
        </Layout>
    );
};

export default TILTemplate;
