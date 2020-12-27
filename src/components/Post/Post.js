import React, { useRef, useEffect } from "react";

import Comment from "./Comment";
import Author from "./Author";
// import OtherPost from "./OtherPost";
import PostInfo from "./PostInfo";

import "./Post.css";

const Post = ({ title, date, category, html, path }) => {
    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.scrollIntoView();
    }, []);

    return (
        <div className="post-container" ref={titleRef}>
            <div className="post-info-container">
                <PostInfo category={category} date={date} />
                <h2 className="post-title">{title}</h2>
            </div>

            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <Author />
            {/*<OtherPost />*/}
            <Comment path={path} title={title} />
        </div>
    );
};

export default Post;
