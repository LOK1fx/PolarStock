import React from "react";

import placeholder_map from "../../assets/placeholder_map.png"

import "./shops_page.css"

export const ShopsPage = () => {
    return (
        <div>
            <img src={placeholder_map} alt="ds" className="shops-map"></img>

            <h1 className="avaible-points">Доступные точки в вашем городе</h1>
        </div>
    );
}