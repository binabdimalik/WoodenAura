import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#D2691E', // chocolate brown
      color: '#fff',
      padding: '24px',
      textAlign: 'center',
      fontSize: '15px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      marginTop: '40px'
    },
    icon: {
      margin: '0 8px',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '20px'
    }
  };

  return (
    <footer style={styles.footer}>
      <p>© 2025 WoodenAura. All rights reserved.</p>

      <div>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTwitter/>
        </a>
        <a href="https://linkedIn.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        </a>
          <FaLinkedin/>
      </div>
    </footer>
  );
}

export default Footer;