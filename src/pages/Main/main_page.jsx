import React, { useState, useEffect } from "react";

import { CATEGORIES } from "../../test_products";
import { Product } from "./product";
import { AdBlock } from "../../components/ad_block";

import { dataBase } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore"

import "./main_page.css"

export const MainPage = () => {
    const [productList, setProductList] = useState([]);
    const productsCollectionRef = collection(dataBase, "PRODUCTS");

    const [adList, setAdList] = useState([]);
    const adCollectionRef = collection(dataBase, "CURRENT_AD");

    useEffect(() => {
        const getProductList = async () =>{
            try {
                const data = await getDocs(productsCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                     id: doc.id
                }));

                console.log(filteredData);

                setProductList(filteredData);
            }
            catch (ex) {
                console.error(ex);
            }
        };

        const getAdList = async () => {
            try {
                const data = await getDocs(adCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));

                setAdList(filteredData);
            }
            catch (ex) {
                console.error(ex);
            }
        };
        

        getProductList();
        getAdList();
    }, []);

    return (
        <div className="main-page">
            <div className="category">
                <div className="category-header">
                    <h2 className="category-title">Предложения</h2>
                </div>

                <div className="ad-block-wrapper">
                    <div className="ad-block">
                        {
                            adList.map((ad) => (
                                <AdBlock data={ad}></AdBlock>
                        ))}
                    </div>
                </div>
                
            </div>

            <div className="category">
                <div className="category-header">
                    <h2 className="category-title">Востребованные</h2>
                    <button className="category-view-button">Смотреть больше</button>
                </div>
                
                <div className="products">
                    {
                        productList.map((product) => (
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