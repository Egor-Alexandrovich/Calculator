import React, { Component } from 'react';
import './input-text.css';

export default class InputText extends Component {
  state = {
    err: false
  }
  onInputChange = (event) => {
    const res = /^[0-9]{1,6}$/.test(event.target.value);
    const { stateVariableName, onInputChange, msrp } = this.props;
    if(res){
      if((stateVariableName === 'downPayment' || stateVariableName === 'tradeInValue')){
        this.setState( {
          err: false 
        });
        if((parseInt(event.target.value) <= 0.25*msrp)) {
          const term = parseInt(event.target.value);
          onInputChange(term, stateVariableName);
        } else {
          this.setState( {
            err: true 
          });
        }
      } else {
        const term = parseInt(event.target.value);
        onInputChange(term, stateVariableName);
      }
    } else {
      if(event.target.value.length === 0){
        const term  = 0;
        onInputChange(term, stateVariableName);
      }
      if(stateVariableName === 'downPayment' || stateVariableName === 'tradeInValue') {
        this.setState( {
          err: true 
        });
      }
    }
  };
  render() {
    const {err} = this.state;
    let elem;
    let elemCurrency
    const { isLoan, headerLabel, value, currency, currencyPosition } = this.props;
    const clazz = isLoan ? 'loan': 'lease';
    const clazz2 = isLoan ? 'loan-item-input': '';
    if(err){elem = <span className="error-measage">value can’t be greater than ¼ of MSRP</span>}
    if(currency) {elemCurrency = <span className="currency">{currency}</span>}
    return (
    <div className={`${clazz}-item ${clazz2}`} >
        <h2 className="input-header">{headerLabel}</h2>
        <div className ={`input-wrapper ${currencyPosition}`}>
          {elemCurrency}
          <input className={`${clazz}-input`}
                type="text" 
                value= {value}
                onChange ={ this.onInputChange }/>
        </div>
        {elem}
    </div>
    );
  }
}
