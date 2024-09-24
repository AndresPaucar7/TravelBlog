import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png'; 

const Header = () => (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="Traveler's Community Logo" className="logo-image" />
            Traveler's Community
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/subscribe">Subscribe</Link></li>
                <li><Link to="/members">Members</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
