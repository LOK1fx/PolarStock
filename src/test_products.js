//test prototype solution

import product_bread from "./assets/bread.png"
import product_fuel from "./assets/fuel.png"
import product_water from "./assets/water2.png"
import product_nurofen from "./assets/nurofen.png"

import category_aids from "./assets/aids.png"
import category_food from "./assets/food.png"
import category_misc from "./assets/misc.png"
import category_dif from "./assets/dif.png"

export const PRODUCTS = [
    {
        id: 1,
        productName: "Хлеб",
        avgPrice: 75.25,
        productImage: product_bread,
    },
    {
        id: 2,
        productName: "Бензин",
        avgPrice: 101.00,
        productImage: product_fuel,
    },
    {
        id: 3,
        productName: "Вода",
        avgPrice: 62.00,
        productImage: product_water,
    },
    {
        id: 4,
        productName: "Нурофен",
        avgPrice: 260.25,
        productImage: product_nurofen,
    },
]

export const CATEGORIES = [
    {
        id: 1,
        productName: "Питание",
        productImage: category_food,
    },
    {
        id: 2,
        productName: "Лекарства",
        productImage: category_aids,
    },
    {
        id: 3,
        productName: "Разное",
        productImage: category_misc,
    },
    {
        id: 4,
        productName: "Прочее",
        productImage: category_dif,
    },
]