import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
    const { name, imageURL, price} = props.data;

    const navigate = useNavigate();

    const onViewSpotsClicked = () => {
        navigate("spotlist");
    };

    return (
        <button className="product" onClick={onViewSpotsClicked}>
            <img src={imageURL} alt={name}></img>

            <div className="product-description">

                <p>
                    <b>{name}</b>
                </p>

                { (price != 0 || price != undefined || price != "0") &&
                    <p>~{price}₽</p>
                }
                

            </div>

            <button className="view-spots-button">Посмотреть точки</button>

        </button>
    );
}