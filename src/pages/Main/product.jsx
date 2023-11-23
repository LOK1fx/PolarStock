import React from "react";

export const Product = (props) => {
    const {productName, avgPrice, productImageURL} = props.data;

    return (
        <div className="product">
            <img src={productImageURL} alt={productName}></img>

            <div className="product-description">

                <p>
                    <b>{productName}</b>
                </p>

                <p>
                    ~{avgPrice}₽
                </p>

            </div>

            <div className="button-container">
                <button className="view-spots-button">Посмотреть точки</button>
            </div>

        </div>
    );
}