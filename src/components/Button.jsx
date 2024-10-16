// Button.js
import React from 'react';
import '../styles/Button.css';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)} className="button">
      {label}
    </button>
  );
};

export default Button;