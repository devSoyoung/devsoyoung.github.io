import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import profile from "../../../../contents/profile.jpeg";

import "./Author.scss";

const Author = () => {
    const data = useStaticQuery(graphql`
        query AuthorQuery {
            site {
                siteMetadata {
                    author
                    description
                }
            }
        }
    `);
    const { author, description } = data.site.siteMetadata;
    return (
        <div className="author">
            <img alt="프로필 사진" src={profile} />
            <a href="https://github.com/devSoyoung" target="_blank">
                {author}
            </a>
            <p>{description}</p>
        </div>
    );
};

export default Author;
