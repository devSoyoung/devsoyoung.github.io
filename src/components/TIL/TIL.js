import React from "react";

import TilItem from "./TilItem";

import "./TIL.css";

const TIL = ({ data }) => (
  <>
    <h1 className="til-title">
      Today I Learned
      <span className="til-subtitle">공부한 내용 짧게 정리</span>
    </h1>
    <div className="til-items">
      {data.map((item, idx) => <TilItem {...item} key={`TilItem_${idx}`} />)}
    </div>
  </>
);

export default TIL;
