import { NavLink as RouterLink } from "react-router-dom";  // this imports NavLink from React Router library

function navLink({ path, label}) {
  return (
    <RouterLink to={path} style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? '#12fc87ff' : '#333',
        margin: '10px'
    })}
    >
        {label}
    </RouterLink>
  );
}

export default navLink;

