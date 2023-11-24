import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { dataBase } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore"

import { Context } from "../../context/context";

import "./cart_page.css"

export const CartPage = ({
    onProductRemoved,
    onQuantityChanged
}) => {

    const { getItemsFromCart } = useContext(Context);

    const products = getItemsFromCart();

    const [productList, setProductList] = useState([]);
    const productsCollectionRef = collection(dataBase, "PRODUCTS");

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

        getProductList();
    }, []);

    const [isComponentVisible, setIsComponentVisible] = useState(false);

    useEffect(() => {
        const delay = 2000; // delay in milliseconds

        const timeoutId = setTimeout(() => {
            setIsComponentVisible(true);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const getFProduct = (prod) => {
        const result = productList.find((p) => p.id === prod);

        console.log(result);

        return result;
    };

    return (
        <div>
            { isComponentVisible &&
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
                                        <img src={getFProduct(product).imageURL}></img>
                                        <h2>{getFProduct(product).name}</h2>
                                        <h2>{getFProduct(product).price}</h2>
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
            }
            { isComponentVisible === false &&
                <p>Подождите...</p>
            }
            
        </div>
    );
};