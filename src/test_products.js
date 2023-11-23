//test prototype solution

import { Auth } from "./components/auth";
import { dataBase } from "./config/firebase";

import category_aids from "./assets/aids.png"
import category_food from "./assets/food.png"
import category_misc from "./assets/misc.png"
import category_dif from "./assets/dif.png"

/**
export const PRODUCTS = [
    {
        id: 1,
        productName: "Хлеб",
        avgPrice: 75.25,
        productImageURL: product_bread,
    },
    {
        id: 2,
        productName: "Бензин",
        avgPrice: 101.00,
        productImageURL: product_fuel,
    },
    {
        id: 3,
        productName: "Вода",
        avgPrice: 62.00,
        productImageURL: product_water,
    },
    /*
    {
        id: 4,
        productName: "Нурофен",
        avgPrice: 260.25,
        productImageURL: product_nurofen,
    },
    */
/*]*/



export const CATEGORIES = [
    {
        id: 1,
        productName: "Питание",
        productImageURL: category_food,
    },
    {
        id: 2,
        productName: "Лекарства",
        productImageURL: category_aids,
    },
    {
        id: 3,
        productName: "Разное",
        productImageURL: category_misc,
    },
    {
        id: 4,
        productName: "Прочее",
        productImageURL: category_dif,
    },
]