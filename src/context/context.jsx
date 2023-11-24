import React, { createContext, useState } from "react";

export const Context = createContext(null);


export const ContextProvider = (props) => {
    const [cartItems, setCarItems] = useState([]);

    return <Context.Provider>{props.children}</Context.Provider>
};