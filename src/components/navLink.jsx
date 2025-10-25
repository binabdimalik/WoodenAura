import React from 'react'; // Required for JSX
import { NavLink as RouterNavLink } from 'react-router-dom'; // Import NavLink from React Router

function NavLink({ path, label }) {
  // Base style for all links
  const baseStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: '500',
    color: '#34495e',
   
  };

  // Style when the link is active (matches current route)
  const activeStyle = {
    ...baseStyle, // Inherit base styles
    color: '#27ae60', // Highlight color
    fontWeight: 'bold',
    borderBottom: '2px solid #27ae60' // Underline effect
  };

  return (
    <RouterNavLink
      to={path} // Destination route
      style={({ isActive }) => (isActive ? activeStyle : baseStyle)} // Apply style based on active state
    >
      {label} {/* Display the link text */}
    </RouterNavLink>
  );
}

export default NavLink;
