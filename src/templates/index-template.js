import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/PostList";
import CategoryList from "../components/Category/CategoryList";

const IndexTemplate = () => {
    const {
        allMarkdownRemark: { edges: data }
    } = useStaticQuery(graphql`
        query PostListQuery {
            allMarkdownRemark(
                filter: {
                    frontmatter: {
                        draft: { ne: true }
                        template: { eq: "post" }
                    }
                }
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        frontmatter {
                            description
                            title
                            path
                            date
                            category
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout type="main">
            <SEO title="Home" />
            <PostList posts={data} />
            {/*<CategoryList categories={[]} />*/}
        </Layout>
    );
};

export default IndexTemplate;
