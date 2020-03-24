import React, { useState } from "react";

import "./TilItem.css";

const TilItem = ({ node: { html, frontmatter } }) => {
  const { date, subject } = frontmatter;
  const [visible, setVisible] = useState(false);

  return (
    <div className="til-item-container">
      <div className="til-item-btn" onClick={() => setVisible(!visible)}><i className={`fas fa-chevron-${visible ? "up" : "down"}`}></i></div>
      <div className="til-item-date">{date}</div>
      <div className="til-item-subjects">{subject.map((sub, idx) =>
        <span className="til-item-subject" key={`${date}_sub_${idx}`}>{sub}</span>)}</div>
      <div className={`til-item-content ${visible && "visible"}`}
           dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default TilItem;
