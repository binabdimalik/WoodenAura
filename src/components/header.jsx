import NavLink from './navLink'
import React from 'react'

export default function Header() {
  const styles = {
  header: {
    display: 'flex',
    flexWrap: 'wrap', // ✅ allows wrapping on small screens
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap', // ✅ wrap nav links
    gap: '10px',
    marginTop: '100px',
    marginBottom: '100px'
  }
};

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

