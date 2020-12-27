import React from "react";
import { Link } from "gatsby";

import "./Header.scss";

const Header = ({ siteTitle, siteDescription, type }) => {
    return (
        <header>
            <div className="header-container">
                <div className="header-menu-container">
                    <Link
                        className={type === "main" ? "selected" : null}
                        to="/"
                    >
                        Post
                    </Link>
                    <Link
                        className={type === "category" ? "selected" : null}
                        to="/category"
                    >
                        Category
                    </Link>
                    <a
                        className="link github"
                        href="https://github.com/devSoyoung"
                        target="_blank"
                    >
                        <i className="fab fa-github-alt" />
                    </a>
                    <a
                        className="link"
                        href="https://www.linkedin.com/in/cutelee/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                <h1 className="header-title">{siteTitle}</h1>
                <div className="header-description">{siteDescription}</div>
            </div>
        </header>
    );
};

export default Header;
