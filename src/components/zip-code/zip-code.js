import React, { Component } from 'react';
import './zip-code.css';

export default class ZipCode extends Component {
  
  render() {
    const { isLoan } = this.props;
    const clazz = isLoan ? 'loan': 'lease';
    const clazz2 = isLoan ? 'loan-item-input': '';
    return (
    <div className={`zip-cod ${clazz}-item ${clazz2}`} >
        <h2 className="input-header">Home ZIP-Code</h2>
        <input className={`${clazz}-input`} type="text" defaultValue="0"/>
    </div>
    );
  }
}