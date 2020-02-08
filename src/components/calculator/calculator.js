import React from 'react';
import './calculator.css';

import Tabs from '../tabs';

const Calculator = () => {
    const isActive = false; 
  return isActive ? (
    <form className="calculator">
        <div className="loan">
            <Tabs />
        </div>
    </form>
  ) : <form className="calculator">
          <div className="lease">
            <Tabs />
          </div>
      </form>;
};

export default Calculator;