import React from "react";

import { PRODUCTS } from "../../test_products";
import { Product } from "./product";

import "./main_page.css"

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-title">
                <h1>PolarStock</h1>
            </div>

            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product}></Product>
                ))}
            </div>
        </div>
    );
}