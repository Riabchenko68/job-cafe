import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

import './navbar.css';

import AuthService from "../../services/auth.service";

export default function NavBar () {

    let { pathname } = useLocation();

    const [ icon, setIcon ] = useState(<BiMenu onClick={getNavbarMobile} />);
    const [ currentUser, setCurrentUser ] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
          }
    }, []);

    const logOut = () => {
        AuthService.logout();
    }

    const navBarItem = [
        { name: 'Home', link: '/', id: 1 },
        { name: 'About', link: '/about', id: 2 },
        { name: 'Jobs', link: '/job-page', id: 3 },
        { name: 'Contact Us', link: '/contact-us', id: 4 }
    ];

    function getNavbarMobile() {
        let element = document.getElementById('navbar');
        if (element.className === 'navbar') {
            element.className = 'navbar-mobile';
            setIcon(<BiX onClick={getNavbarMobile} />);
        } else {
            element.className = 'navbar'; 
            setIcon(<BiMenu onClick={getNavbarMobile} />);
        } 
    }

    function closeMenu() {
        let element = document.getElementById('navbar');
        if (element.className === 'navbar-mobile') {
            getNavbarMobile();
        }
    }

    return (
        <nav id="navbar" className='navbar'>
            <ul> 
                {navBarItem.map((item) => ( 
                    <li key={item.id}>
                        <Link to={item.link} 
                            id={item.id}
                            className={pathname === item.link ? 'active' : ''}
                            name={item.name}
                            onClick={closeMenu}
                        >
                            {item.name}
                        </Link>
                    </li> 
                ))}
                {currentUser ? (
                    <div className='navbar-list'>
                        <li key="8">
                            <a href="/" className={pathname === '/' ? 'active' : ''} onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className='navbar-list'>
                        <li key="9">
                            <Link to={"/login"} className={pathname === '/login' ? 'active' : ''} onClick={closeMenu}>
                                Log In
                            </Link>
                        </li>
                        <li key="10">
                            <Link to={"/registration"} className={pathname === '/registration' ? 'active' : ''} onClick={closeMenu}>
                                Registration
                            </Link>
                        </li> 
                    </div>  
                )}
            </ul> 
            <i className="mobile-nav-toggle">{icon}</i>
        </nav>
    )
}
