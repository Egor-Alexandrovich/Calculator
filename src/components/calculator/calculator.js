import React from 'react';
import './calculator.css';

import Tabs from '../tabs';
import ZipCode from '../zip-code';

const Calculator = () => {
    const isLoan = false; 
  return isLoan ? (
    <form className="calculator">
        <div className="loan">
            <Tabs />
            <div className="loan-items">
                <ZipCode isLoan = {isLoan}/>
            </div>
        </div>
    </form>
  ) : <form className="calculator">
          <div className="lease">
            <Tabs />
            <div className="lease-items">
                <ZipCode isLoan = {isLoan}/>
            </div>
          </div>
      </form>;
};

export default Calculator;