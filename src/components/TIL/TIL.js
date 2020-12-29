import React from "react";

import TilItem from "./TilItem";

import "./TIL.css";

const TIL = ({ data }) => (
  <>
    <h1 className="til-title">
      Today I Learned 👩🏻‍💻
      <span className="til-subtitle">오늘 알게 된 것들</span>
    </h1>
    <div className="til-items">
      {data.map((item, idx) => (
        <TilItem {...item} key={`TilItem_${idx}`} />
      ))}
    </div>
  </>
);

export default TIL;
