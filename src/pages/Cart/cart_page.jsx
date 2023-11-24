import React from "react";
import { Link } from "react-router-dom";

import "./cart_page.css"

export const CartPage = ({
    products,
    onProductRemoved,
    onQuantityChanged
}) => {
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