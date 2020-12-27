import React from "react";
import ReactDisqusComments from "react-disqus-comments";

import { useSiteMetaData } from "../../../hooks";

const Comment = ({ title, path }) => {
    const { disqusShortname, url } = useSiteMetaData();

    if (!disqusShortname) {
        return;
    }

    return (
        <div style={{ marginTop: 20 }}>
            <ReactDisqusComments
                shortname={disqusShortname}
                identifier={title}
                title={title}
                url={url.concat(path)}
            />
        </div>
    );
};

export default Comment;
