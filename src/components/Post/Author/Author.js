import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import profile from "../../../../contents/profile.jpeg";

import "./Author.css";

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
    <div className="author-info">
      <img className="author-image" alt="프로필 사진" src={profile} />
      <p className="author-name">
        <a href="https://github.com/devSoyoung" target="_blank">
          {author}
        </a>
      </p>
      <p className="author-description">{description}</p>
    </div>
  );
};

export default Author;
