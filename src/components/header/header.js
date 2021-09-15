import React from "react";

import './header.css';

function Header () {
    return (
        <div>

            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container d-flex justify-content-between align-items-center">

                    <div className="logo">
                        <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
                        <img src="assets/img/logo.png" alt="" className="img-fluid" />
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="active " href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown"><span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                                <ul>
                                    <li>Drop Down 1</li>
                                    <li className="dropdown"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i>
                                        <ul>
                                            <li>Deep Drop Down 1</li>
                                            <li>Deep Drop Down 2</li>
                                            <li>Deep Drop Down 3</li>
                                            <li>Deep Drop Down 4</li>
                                            <li>Deep Drop Down 5</li>
                                        </ul>
                                    </li>
                                    <li>Drop Down 2</li>
                                    <li>Drop Down 3</li>
                                    <li>Drop Down 4</li>
                                </ul>
                            </li>
                            <li>Contact Us</li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;