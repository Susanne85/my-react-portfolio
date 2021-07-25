import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles/Navbar.css';

export default function NavPort(props) {

    const location = useLocation();
    return (
        <ul className="navbar" >
            <li className="nav-item">
                <Link to='/'
                    className={location.pathname === '/home' ? 'nav-link active' : 'nav-link'}
                    >
                    Susanne
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/about-me'
                    className={location.pathname === '/about-me' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/contact'
                    className={location.pathname === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/portfolio'
                    className={location.pathname === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/resume'
                    className={location.pathname === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}