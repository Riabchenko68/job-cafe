import React from "react";
import { Link } from 'react-router-dom';

import './navbar.css';

export default function NavBar () {

   const navBarItem = [
        { name: 'Home', className: 'active', link: '/', id: 1 },
        { name: 'About', className: '', link: '/about', id: 2 },
        { name: 'Jobs', className: '', link: '/job-page', id: 3 },
        { name: 'Contact Us', className: '', link: '/blog', id: 4 }
    ];

    function onHandelClick(e) {
        console.log(e);
        let itemIds = navBarItem.map(item => (item.id))
        for (let i = 0; i < itemIds.length; i++) {
            document.getElementById(itemIds[i]).style.color = '';
        }
        e.target.style.color = '#a2cce3'; 
    }


    return (
        <nav id="navbar" className="navbar">
            <ul> 
                {navBarItem.map((item) => ( 
                    <li key={item.id}>
                        <Link to={item.link} 
                            id={item.id}
                            className={item.className}
                            onClick={ onHandelClick }
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