import React from 'react';
import './calculator.css';

const Calculator = () => {
    const isActive = false; 
  return isActive ? (
    <form className="calculator">
        <div className="loan"></div>
    </form>
  ) : <form className="calculator">
          <div className="lease"></div>
      </form>;
};

export default Calculator;