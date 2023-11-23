import React from "react";

import "./spot_list.css"

export const SpotList = () => {
    return (
        <div>
            <div className="list">
                <h1 className="header-text">Доступные точки</h1>

                <button className="spot-button">
                    <h2>Калина</h2>
                </button>
                <button className="spot-button">
                    <h2>Мираж</h2>
                </button>
                <button className="spot-button">
                    <h2>76 аптека</h2>
                </button>
            </div>
        </div>
    );
}