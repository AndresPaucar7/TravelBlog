import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png'; 

const Header = () => {
    return (
      <header className="header">
        <nav>
          <ul>
            {/* Other navigation links */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/brazil-blog">Our Blogs</Link></li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;
