import React, { useEffect, useState } from "react";

import { dataBase } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore"

import "./spot_list.css"

export const SpotListPage = () => {
    const [shopList, setShopList] = useState([]);
    const shopListCollectionRef = collection(dataBase, "SHOPS");

    useEffect(() => {
        const getShopsList = async () => {
            try {
                const data = await getDocs(shopListCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));

                setShopList(filteredData);
            }
            catch (ex) {

            }
        };

        getShopsList();
    });

    const onSpotButtonClicked = () => {

    };


    return (
        <div>
            <div className="list">
                <h1 className="header-text">Доступные точки</h1>

                <button className="spot-button">
                    <h2>Калина</h2>
                </button>
                <button className="spot-button">
                    <h2>Мираж</h2>
                </button>
                <button className="spot-button">
                    <h2>76 аптека</h2>
                </button>
            </div>
        </div>
    );
}