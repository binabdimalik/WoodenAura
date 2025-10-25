import React from 'react';

function Button({ label, onClick, type = "button", style = {} }) {
  const defaultStyle = {
    backgroundColor: '#27ae60',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background-color 0.3s ease'
  };

  const hoverStyle = {
    backgroundColor: '#219150'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...defaultStyle, ...style }}
      onMouseOver={e => e.target.style.backgroundColor = hoverStyle.backgroundColor}
      onMouseOut={e => e.target.style.backgroundColor = defaultStyle.backgroundColor}
    >
      {label}
    </button>
  );
}

export default Button;