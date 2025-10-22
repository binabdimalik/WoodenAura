import React from "react";

// Destructure props directly in the function parameters
const Button = ({ label, onClick, type = "button", style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "#fff",
        fontSize: "16px",
        ...style, // Merge custom styles passed via props
      }}
    >
      {label}
    </button>
  );
};

export default Button;
