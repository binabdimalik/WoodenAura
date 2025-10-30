import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

function NavLink({ path, label }) {
  const baseStyle = {
    margin: '0 12px',
    textDecoration: 'none',
    fontWeight: '500',
    color: '#4B3F2F', // deep walnut
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: '16px',
    paddingBottom: '4px',
    transition: 'color 0.3s ease, border-bottom 0.3s ease'
  };

  const activeStyle = {
    ...baseStyle,
    color: '#D2691E', // chocolate brown
    fontWeight: '600',
    borderBottom: '2px solid #FFA500' // warm orange underline
  };

  return (
    <RouterNavLink
      to={path}
      style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
    >
      {label}
    </RouterNavLink>
  );
}

export default NavLink;