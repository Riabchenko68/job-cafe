import React from "react";

import Logo from "../logo";
import NavBar from "../navbar/navbar";

import './header.css';


function Header () {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container d-flex justify-content-between align-items-center">
                    <Logo />
                    <NavBar />
                </div>
            </header>
        </div>
    )
}

export default Header;