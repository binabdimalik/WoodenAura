import { NavLink as RouterLink } from "react-router-dom";

function navLink({ path, label}) {
  return (
    <RouterLink to={path} style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? '#8b4513' : '#333',
        margin: '10px'
    })}
    >
        {label}
    </RouterLink>
  );
}

export default navLink;

