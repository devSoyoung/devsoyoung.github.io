import React from "react";
import PostItem from "./PostItem";

import "./PostList.scss";

const PostList = ({ posts }) => {
    return (
        <ul className="post-list">
            {posts.map((post, idx) => (
                <PostItem
                    item={post.node.frontmatter}
                    key={`post-list-${idx}`}
                />
            ))}
        </ul>
    );
};

export default PostList;
