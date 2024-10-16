// Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  // Handle input for numbers and operators
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  // Evaluate the expression
  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  // Clear the display
  const handleClear = () => {
    setDisplay('');
  };


  const options = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', '/', 'C'];

  return (
    <div className="calculator">

      <Display value={display} />

      <div className="buttons">
        
        {options.map((item, index) =>
          item === '=' ? (
            <Button key={index} label={item} onClick={handleEqual} />
          ) : item === 'C' ? (
            <Button key={index} label={item} onClick={handleClear} />
          ) : (
            <Button key={index} label={item} onClick={handleClick} />
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
