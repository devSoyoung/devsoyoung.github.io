import React from "react";

import PostItem from "./PostItem";

import "./PostList.css";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post, idx) => (
        <PostItem item={post.node.frontmatter} key={`post-list-${idx}`}/>
      ))}
    </div>
  );
};

export default PostList;