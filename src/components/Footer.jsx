import React from 'react';
import './Footer.css'; 
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>Phone (718)-303-1343</p>
        <p>FakeTravelCompany@gmail.com</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-logo">
      <img src={logo} alt="ogo" /> 
        <p>Naturally Curious</p>
      </div>
      <div className="footer-subscribe">
        <p>Explore the world from your inbox</p>
        <p>
          Let us inspire your next getaway with new destinations and special
          deals.
        </p>
        <form className="subscribe-form">
          <input type="email" placeholder="email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
