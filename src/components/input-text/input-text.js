import React, { Component } from 'react';
import './input-text.css';

export default class InputText extends Component {
  
  render() {
    const { isLoan, headerLabel } = this.props;
    const clazz = isLoan ? 'loan': 'lease';
    const clazz2 = isLoan ? 'loan-item-input': '';
    return (
    <div className={`zip-cod ${clazz}-item ${clazz2}`} >
        <h2 className="input-header">{headerLabel}</h2>
        <input className={`${clazz}-input`} type="text" defaultValue="0"/>
    </div>
    );
  }
}
