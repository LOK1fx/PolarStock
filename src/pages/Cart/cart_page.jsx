import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { getDoc } from "firebase/firestore";

import { Context } from "../../context/context";

import "./cart_page.css"

export const CartPage = ({
    onProductRemoved,
    onQuantityChanged
}) => {

    const { getItemsFromCart } = useContext(Context);

    const products = getItemsFromCart();

    return (
        <div>
            <div className="header">
                <h1>Корзина</h1>
            </div>

            <div className="cart-wrapper">

                { products.length === 0 && 
                    <h1 className="empty-cart-text">
                        Ваша корзина сейчас пуста. Хотите что-то добавить?
                        <Link to={"/"}>Каталог</Link>
                    </h1>
                }

                {   
                    products.map((product) => (
                        <div className="cart-product">
                            <div className="cart-product-info">
                                <img src="https://i.postimg.cc/rDNT6tJV/bread.png"></img>
                                <h2>{product}</h2>
                                <h2>{43}</h2>
                                <h3> Кол-во: 1</h3>
                            </div>
                        </div>
                    ))
                }

                <div className="bottom-section">
                    <button className="clear-all-button">Очистить всё</button>
                </div>
            </div>
        </div>
    );
};