import React from 'react';
import './calculator.css';

import Tabs from '../tabs';
import InputText from '../input-text';
import InputBtnOrNumber from '../input-btn-or-number';

const Calculator = ({isLoan, tradeInValue, downPayment, zipCodeLease, zipCodeLoan, estimatedAPR, approxCreditScore, creditScoreValue, termMonthLoan, onSwitchTab, onInputChange }) => {

    const buttonsASC = [
        {name:['Poor','639 or less'], label:'1.2'},
        {name:['Fair','640-699'], label:'1.05'},
        {name:['Good','700-749'], label:'1'},
        {name:['Excellent','750-900'], label:'0.95'}
      ]
    const buttonsMonth = [
    {name:['12'], label:'12'},
    {name:['24'], label:'24'},
    {name:['36'], label:'36'},
    {name:['48'], label:'48'},
    {name:['72'], label:'72'},
    {name:['84'], label:'84'}
    ]  
  return isLoan ? (
    <form className="calculator">
        <div className="loan">
            <Tabs
            isLoan = {isLoan} 
            onSwitchTab = { onSwitchTab }/>
            <div className="loan-items">
                <InputBtnOrNumber isLoan = {isLoan}
                                  header = 'Term (Month)'
                                  filter = { termMonthLoan }
                                  buttonsArr = {buttonsMonth}/>
                <InputText isLoan = {isLoan}
                        value = { tradeInValue }
                        stateVariableName = 'tradeInValue'
                        onInputChange = { onInputChange }
                        headerLabel ='Trade-in-Value'/>
                <InputText isLoan = {isLoan}
                    value = { downPayment }
                    stateVariableName = 'downPayment'
                    onInputChange = { onInputChange }
                    headerLabel ='Down Payment'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                  header = 'Approx. Credit Score'
                                  filter = { creditScoreValue }
                                  buttonsArr = {buttonsASC}
                                  clazz = 'btn-apr'/>
                <InputText isLoan = {isLoan}
                        value = { zipCodeLoan }
                        stateVariableName = 'zipCodeLoan'
                        onInputChange = { onInputChange }
                        headerLabel ='Home ZIP-Code'/>
                <InputText isLoan = {isLoan}
                        value = { estimatedAPR }
                        stateVariableName = 'estimatedAPR'
                        onInputChange = { onInputChange }
                        headerLabel ='Estimated APR'/>
            </div>
        </div>
    </form>
  ) : <form className="calculator">
          <div className="lease">
            <Tabs
            isLoan = {isLoan} 
            onSwitchTab = { onSwitchTab }/>
            <div className="lease-items">
                <InputText isLoan = {isLoan}
                        value = { zipCodeLease }
                        stateVariableName = 'zipCodeLease'
                        onInputChange = { onInputChange }
                        headerLabel ='Home ZIP-Code'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                    header = 'Approx. Credit Score'
                                    min = '600'
                                    max = '900'
                                    step = '50'
                                    defaultValue ='750'/>
                <InputText isLoan = {isLoan}
                           value = { tradeInValue }
                           stateVariableName = 'tradeInValue'
                           onInputChange = { onInputChange }
                           headerLabel ='Trade-in-Value'/>
                <InputBtnOrNumber isLoan = {isLoan}
                                    header = 'Term (Month)'
                                    min = '24'
                                    max = '48'
                                    step = '12'
                                    defaultValue ='36'/>        
                <InputText isLoan = {isLoan}
                    value = { downPayment }
                    stateVariableName = 'downPayment'
                    onInputChange = { onInputChange }
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
