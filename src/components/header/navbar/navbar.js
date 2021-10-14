import React from "react";
import { Link, useLocation } from 'react-router-dom';

import './navbar.css';

export default function NavBar () {

    let { pathname } = useLocation();

    const navBarItem = [
        { name: 'Home', link: '/', id: 1 },
        { name: 'About', link: '/about', id: 2 },
        { name: 'Jobs', link: '/job-page', id: 3 },
        { name: 'Contact Us', link: '/contact-us', id: 4 }
    ];
       
    return (
        <nav id="navbar" className="navbar">
            <ul> 
                {navBarItem.map((item) => ( 
                    <li key={item.id}>
                        <Link to={item.link} 
                            id={item.id}
                            className={pathname === item.link ? 'active' : ''}
                            name={item.name}
                        >
                            {item.name}
                        </Link>
                    </li> 
                ))}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    )
}