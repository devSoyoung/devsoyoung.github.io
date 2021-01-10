import React from "react";

import Comment from "./Comment";
import Author from "./Author";
import PostInfo from "./PostInfo";

import "./Post.scss";

const Post = ({ title, date, category, html, path }) => {
    return (
        <div className="post-container">
            <div className="post-info-container">
                <PostInfo category={category} date={date} />
                <h2 className="post-title">{title}</h2>
            </div>
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <Author />
            <Comment path={path} title={title} />
        </div>
    );
};

export default Post;
