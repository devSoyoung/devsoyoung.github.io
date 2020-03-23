import React from "react";

import "./TilItem.css";

const TilItem = ({ node: { html, frontmatter } }) => {
  const { date, subject } = frontmatter;
  return (
    <div className="til-item-container">
      <div className="til-item-date">{date}</div>
      <div className="til-item-subjects">{subject.map((sub, idx) =>
        <span className="til-item-subject" key={`${date}_sub_${idx}`}>{sub}</span>)}</div>
      <div className="til-item-content"
           dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default TilItem;
