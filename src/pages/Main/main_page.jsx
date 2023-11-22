import React from "react";

import { PRODUCTS } from "../../test_products";
import { CATEGORIES } from "../../test_products";
import { Product } from "./product";

import "./main_page.css"

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="category">
                <div className="category-header">
                    <h2 className="category-title">Востребованные</h2>
                    <button className="category-view-button">Смотреть больше</button>
                </div>
                
                <div className="products">
                    {
                        PRODUCTS.map((product) => (
                            <Product data={product}></Product>
                    ))}
                </div>
            </div>

            <div className="category">
                <div className="category-header">
                    <h2 className="category-title">Категории</h2>
                    <button className="category-view-button">Смотреть больше</button>
                </div>

                <div className="products">
                    {
                        CATEGORIES.map((categories) => (
                            <Product data={categories}></Product>
                    ))}
                </div>
            </div>
            
        </div>
    );
}