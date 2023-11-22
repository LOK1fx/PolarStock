import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Main </Link>
                <Link to="/shops"> 
                    <ShoppingBag size={24}>Точки</ShoppingBag>
                </Link>
            </div>
        </div>
    );
}