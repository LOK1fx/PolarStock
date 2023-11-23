import React from "react";
import { Link } from "react-router-dom";
import { Compass } from "phosphor-react";
import { Person } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";

import { auth } from "../config/firebase";

import "./navbar.css"

export const Navbar = () => {

    /*
    const getUserProfileImage = () => {
        let profileImagePath = "../assets/misc.png";

        if (auth != null && auth.currentUser != null) {
            profileImagePath = auth?.currentUser?.photoURL;
        }

        return profileImagePath;
    };
    */

    return (
        <div className="navbar">
            <Link to="/" className="main-title">
                <h1>PolarStock</h1>
            </Link>

            <div className="links">
                <Link to="/cart">{<ShoppingCart size={34} />}</Link>
                <Link to="/account">
                    <Person size={34}>Аккаунт</Person>
                </Link>
                <Link to="/shops"> 
                    <Compass size={34}>Точки</Compass>
                </Link>
            </div>
        </div>
    );
}