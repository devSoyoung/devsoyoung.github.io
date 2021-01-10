import React from "react";
import { Link } from "gatsby";

import "./Header.scss";

const Header = ({ siteTitle, siteDescription, type }) => {
    const isMain = type === "main";
    return (
        <header className={!isMain ? "simple" : null}>
            <div className="header-inner">
                <h1>
                    <Link to="/">{siteTitle}</Link>
                </h1>
                <div className="description">{siteDescription}</div>
                <ul>
                    <li>
                        <a
                          href="https://github.com/devSoyoung"
                          target="_blank"
                        >
                            <i className="fab fa-github-alt" />
                        </a>
                    </li>
                    <li>
                        <a
                          href="https://www.linkedin.com/in/cutelee/"
                          target="_blank"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
