import React from "react";
import { Link } from "gatsby";

import PostInfo from "../Post/PostInfo";

import "./PostItem.scss";

const PostItem = ({ item }) => {
  const { title, description, path, date, category } = item;
  return (
    <li className="post-item">
      <PostInfo category={category} date={date} />
      <h2>
        <Link to={path}>{title}</Link>
      </h2>
      <div className="description">{description}</div>
    </li>
  );
};

export default PostItem;
