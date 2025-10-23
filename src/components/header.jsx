import React from 'react';
import navLink from './navLink';
import SearchBar from './searchBar';

function Header() {
  return (
    <header>
      <h1>WoodenAura</h1>
      <nav>
        <navLink path="/" label="Home" />
        <navLink path="/products" label="Products" />
        <navLink path="/about" label="About" />
        <navLink path="/contact" label="Contact" />
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
