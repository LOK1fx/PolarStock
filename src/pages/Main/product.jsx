import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

export const Product = (props) => {
    const { name, imageURL, price, id} = props.data;

    const { addToCart } = useContext(Context);

    const navigate = useNavigate();

    const onViewSpotsClicked = () => {
        navigate("spotlist");
    };

    const onAddToCartClicked = () => {
        addToCart(id);
    };

    return (
        <button className="product" onClick={onViewSpotsClicked}>
            <img src={imageURL} alt={name}></img>

            <div className="product-description">

                <p className="product-name">
                    <b>{name}</b>
                </p>

                { (price !== 0 || price !== undefined || price !== "0" || price !== '' || price !== null) &&
                    <p>~{price}₽</p>
                }
                

            </div>

            <button className="view-spots-button"><b>Посмотреть точки</b></button>
            <button className="view-spots-button" onClick={(event) => {
                event.stopPropagation();
                onAddToCartClicked();
            }}><b>Добавить в корзину</b></button>

        </button>
    );
}