import React from 'react';
import NavLink from './navLink';
import SearchBar from './searchBar';

function Header() {
  return (
    <header>
      <h1>WoodenAura</h1>
      <nav>
        <NavLink path="/" label="Home" />
        <NavLink path="/products" label="Products" />
        <NavLink path="/about" label="About" />
        <NavLink path="/contact" label="Contact" />
      </nav>
      <SearchBar />
    </header>
  );
}

  return (
    <nav>
  <NavLink path="/" label="Home" />
  <NavLink path="/products" label="Products" />
  <NavLink path="/cart" label="Cart" />
  <NavLink path="/about" label="About" />
  <NavLink path="/contact" label="Contact" />
</nav>

  )
}
