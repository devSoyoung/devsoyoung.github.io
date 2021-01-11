/**
 * layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.css";

import Header from "../layout/Header";
import "./reset.scss";
import "./layout.scss";

const Layout = ({ children, type }) => {
    const data = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );
    const { title, description } = data.site.siteMetadata;
    return (
        <>
            <Header
                siteTitle={title}
                siteDescription={description}
                type={type}
            />
            <div className={`layout layout_${type}`}>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with{" "}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
