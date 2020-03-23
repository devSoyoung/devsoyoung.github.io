import React from "react";
import { Link } from "gatsby";

import PostInfo from "../Post/PostInfo";

import "./PostItem.css";

const PostItem = ({ item }) => {
  const { title, description, path, date, category } = item;
  return (
    <div className="post-item-container">
      <div className="post-item-info">
        <PostInfo category={category} date={date} />
      </div>
      <Link to={path}>
        <h2 className="post-item-title">{title}</h2>
      </Link>
      <div className="post-item-description">{description}</div>
    </div>
  );
}

export default PostItem;
