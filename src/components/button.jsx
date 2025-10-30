import React from 'react';

function Button({ label, onClick, type = "button", style = {} }) {
  const defaultStyle = {
    backgroundColor: '#D2691E', // chocolate brown
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '15px',
    fontFamily: 'Segoe UI, sans-serif',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  };

  const hoverStyle = {
    backgroundColor: '#A0522D' // deeper brown on hover
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...defaultStyle, ...style }}
      onMouseOver={e => {
        e.target.style.backgroundColor = hoverStyle.backgroundColor;
        e.target.style.transform = 'scale(1.03)';
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = defaultStyle.backgroundColor;
        e.target.style.transform = 'scale(1)';
      }}
    >
      {label}
    </button>
  );
}

export default Button;