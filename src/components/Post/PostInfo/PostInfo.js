import React from "react";

import "./PostInfo.css";

const PostInfo = ({ category, date }) => {
  return (
    <>
      <span className="post-info-category">{category}</span>
      <span className="post-info-date">{date}</span>
    </>
  );
}

export default PostInfo;
