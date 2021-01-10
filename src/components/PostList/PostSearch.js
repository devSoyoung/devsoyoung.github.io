import React, { useState } from "react";

import "./PostSearch.scss";

const PostItem = ({ keyword, onChange }) => {
    const [focused, setFocused] = useState(false);
    return (
        <div className="post-search">
            <label className={focused ? "focused" : null}>
                <input
                    type="search"
                    value={keyword}
                    placeholder="카테고리나 제목을 검색해보세요 :)"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={onChange}
                />
                <span>🔎</span>
            </label>
        </div>
    );
};

export default PostItem;
