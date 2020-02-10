import React, { Component } from 'react';
import './input-text.css';

export default class InputText extends Component {
  onInputChange = (event) => {
    const res = /^[0-9]{1,6}$/.test(event.target.value);
    console.log(res, ' ', event.target.value);
    if(res){
      const term  = parseInt(event.target.value);
      this.props.onInputChange(term, this.props.stateVariableName);
    }
  };
  render() {
    const { isLoan, headerLabel, value } = this.props;
    const clazz = isLoan ? 'loan': 'lease';
    const clazz2 = isLoan ? 'loan-item-input': '';
    return (
    <div className={`${clazz}-item ${clazz2}`} >
        <h2 className="input-header">{headerLabel}</h2>
        <input className={`${clazz}-input`}
               type="text" 
               value= {value}
               onChange ={ this.onInputChange }/>
    </div>
    );
  }
}
