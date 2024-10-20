// Display Component
import React from 'react';
import '../styles/Display.css';

const Display = ({ value }) => {
  return <div className="display">{value || '0'}</div>;
};

export default Display;
