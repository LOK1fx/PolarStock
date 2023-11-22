import React from "react";
import { Link } from "react-router-dom";
import { Compass } from "phosphor-react";
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="main-title">
                <h1>PolarStock</h1>
            </div>

            <div className="links">
                <Link to="/"> ... </Link>
                <Link to="/shops"> 
                    <Compass size={34}>Точки</Compass>
                </Link>
            </div>
        </div>
    );
}