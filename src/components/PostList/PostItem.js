import React from "react";
import { Link } from "gatsby";

import PostInfo from "components/Post/PostInfo";
import thumbnails from "../../assets/thumbnails";
import "./PostItem.scss";

const PostItem = ({ item }) => {
    const { title, description, path, date, category } = item;
    const thumbnail = thumbnails[category.toLowerCase()];
    return (
        <li className="post-item">
            <Link to={path}>
                <div>
                    <PostInfo category={category} date={date} />
                    <h2>{title}</h2>
                    <div className="description">{description}</div>
                </div>
                {thumbnail && <img src={thumbnail} alt={category} />}
            </Link>
        </li>
    );
};

export default PostItem;
