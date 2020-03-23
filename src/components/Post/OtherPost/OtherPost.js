import React from "react";

import "./OtherPost.css";

const OtherPost = () => {
  return (
    <div class="other-post-container">
      <div>
        <span className="other-post prev">
          <i className="far fa-hand-point-left"></i>
          <div className="other-post-title">prev</div>
        </span>
          <span className="other-post next">
          <i className="far fa-hand-point-right"></i>
          <div className="other-post-title">next</div>
        </span>
      </div>
      <div style={{ display: "none" }}>
        <div style={{ display: "inline-block", width: "50%" }}>
          <h3 className="other-post-type">블로그 최신 글</h3>
        </div>
        <div style={{ display: "inline-block", width: "50%" }}>
          <h3 className="other-post-type">같은 주제의 다른 글</h3>
        </div>
      </div>
    </div>
  );
}

export default OtherPost;
