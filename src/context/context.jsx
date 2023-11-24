import React, { createContext, useState } from "react";

export const Context = createContext(null);

const items = [];

export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id) => {
        items.push(id);
        setCartItems(items);

        console.log(cartItems);
    };

    const getItemsFromCart = () => {
        return cartItems;
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] +- 1}));
        console.log(cartItems);
    };

    const contextValue = {cartItems, addToCart, removeFromCart, getItemsFromCart}

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>
};