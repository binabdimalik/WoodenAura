// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // Optional: create this for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Copyright */}
        <p className="copyright">© 2025 WoodenAura. All rights reserved.</p>

        {/* Quick Links */}
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
