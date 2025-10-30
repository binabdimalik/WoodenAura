import NavLink from './navLink';
import React from 'react';

export default function Header() {
  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'linear-gradient(to right, #FFF8F0, #FFE4C4)', // soft wood tones
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      fontFamily: 'Segoe UI, sans-serif',
      width: '100%'
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '12px',
      marginBottom: '12px'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.nav}>
        <NavLink path="/" label="Home" />
        <NavLink path="/products" label="Products" />
        <NavLink path="/cart" label="Cart" />
        <NavLink path="/about" label="About" />
        <NavLink path="/contact" label="Contact" />
      </div>
    </header>
  );
}