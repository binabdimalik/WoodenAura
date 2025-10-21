import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <a href="/">Wood Aura</a>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-banner">
        <h1>Hand-crafted Furniture for Inspired Living</h1>
        <p>Highly durable</p>
      
    </header>
  );
};

export default Header;
