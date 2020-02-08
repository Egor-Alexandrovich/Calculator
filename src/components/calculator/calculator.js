import React from 'react';
import './calculator.css';

import Tabs from '../tabs';
import InputText from '../input-text';
import InputBtnOrNumber from '../input-btn-or-number';

const Calculator = () => {
    const isLoan = true;
    const buttonsASC = [
        {name:['Poor','639 or less'], label:'2'},
        {name:['Fair','640-699'], label:'3'},
        {name:['Good','700-749'], label:'4'},
        {name:['Excellent','750-900'], label:'5'}
      ]
    const buttonsMonth = [
    {name:['36'], label:'6'},
    {name:['48'], label:'7'},
    {name:['60'], label:'8'},
    {name:['72'], label:'9'},
    {name:['84'], label:'10'}
    ]  
  return isLoan ? (
    <form className="calculator">
        <div className="loan">
            <Tabs />
            <div className="loan-items">
                <InputBtnOrNumber isLoan = {isLoan}
                                  header = 'Term (Month)'
                                  buttonsArr = {buttonsMonth}/>
                <InputText isLoan = {isLoan}
                        headerLabel ='Trade-in-Value'/>
                <InputText isLoan = {isLoan}
                    headerLabel ='Down Payment'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                  header = 'Approx. Credit Score'
                                  buttonsArr = {buttonsASC}
                                  clazz = 'btn-apr'/>
                <InputText isLoan = {isLoan}
                        headerLabel ='Home ZIP-Code'/>
                
                
            </div>
        </div>
    </form>
  ) : <form className="calculator">
          <div className="lease">
            <Tabs />
            <div className="lease-items">
                <InputText isLoan = {isLoan}
                        headerLabel ='Home ZIP-Code'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                    header = 'Approx. Credit Score'
                                    min = '600'
                                    max = '900'
                                    step = '50'
                                    defaultValue ='750'/>
                <InputText isLoan = {isLoan}
                        headerLabel ='Trade-in-Value'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                    header = 'Term (Month)'
                                    min = '24'
                                    max = '48'
                                    step = '12'
                                    defaultValue ='36'/>        
                <InputText isLoan = {isLoan}
                    headerLabel ='Down Payment'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                    header = 'Annual Miles'
                                    min = '10000'
                                    max = '15000'
                                    step = '1000'
                                    defaultValue ='12000'/>  
            </div>
          </div>
      </form>;
};

export default Calculator;
