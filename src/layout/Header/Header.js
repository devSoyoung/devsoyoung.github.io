import React from "react";
import { Link } from "gatsby";

import "./Header.scss";

const Header = ({ siteTitle, siteDescription, type }) => {
  return (
    <header>
      <div className="header-inner">
        <ul>
          <li>
            <Link className={type === "main" ? "selected" : null} to="/">
              Post
            </Link>
          </li>
          <li>
            <Link
              className={type === "category" ? "selected" : null}
              to="/category"
            >
              Category
            </Link>
          </li>
          <li>
            <a
              className="link github"
              href="https://github.com/devSoyoung"
              target="_blank"
            >
              <i className="fab fa-github-alt" />
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://www.linkedin.com/in/cutelee/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
        <h1>{siteTitle}</h1>
        <div className="description">{siteDescription}</div>
      </div>
    </header>
  );
};

export default Header;
