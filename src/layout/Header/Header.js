import React from "react";
import { Link } from "gatsby";

import "./Header.css";

const Header = ({ siteTitle, siteDescription, type }) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-menu-container">
          <Link className={"header-menu-item".concat(type === "main" ? " selected" : "")} to="/">
            Post
          </Link>
          <Link className={"header-menu-item".concat(type === "til" ? " selected" : "")} to="/til">
            TIL
          </Link>
          <Link className={"header-menu-item".concat(type === "category" ? " selected" : "")} to="/category">
            Category
          </Link>
          {/*<Link className={"header-menu-item".concat(type === "about" ? " selected" : "")} to="/about">*/}
          {/*  About*/}
          {/*</Link>*/}
          <a className="header-menu-item link github" href="https://github.com/devSoyoung" target="_blank">
            <i className="fab fa-github-alt"></i>
          </a>
          <a className="header-menu-item link" href="https://www.linkedin.com/in/cutelee/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <h1 className="header-title">
          {siteTitle}
        </h1>
        <div className="header-description">{siteDescription}</div>
      </div>
    </header>
  );
}

export default Header;
