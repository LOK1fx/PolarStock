import React from "react";

export const Product = (props) => {
    const {id, productName, avgPrice, productImage} = props.data;

    return (
        <div className="product">
            <img src={productImage} alt={id}></img>

            <div className="product-description">

                <p>
                    <b>{productName}</b>
                </p>

                <p>
                    ~{avgPrice}₽
                </p>

            </div>

            <button className="view-spots-button"> Посмотреть точки </button>

        </div>
    );
}