import React from "react";
import { Link } from "react-router-dom";

import "./ad_block.css"

export const AdBlock = (props) => {
    const {siteURL, imageURL} = props.data || {};

    return (
        <div className="ad">
            <Link to={siteURL}>
                <img src={imageURL} className="ad-image"></img>
            </Link>
        </div>
    );
}