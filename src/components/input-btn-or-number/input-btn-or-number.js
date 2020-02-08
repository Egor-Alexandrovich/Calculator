import React, { Component } from 'react';
import './input-btn-or-number.css';

export default class InputBtnOrNumber extends Component {
    
  render() {
    const { isLoan, header, min, max, step, defaultValue, buttonsArr, clazz } = this.props;
    const clazzBtn = clazz ? `btn ${clazz}` : 'btn';
    const buttons = buttonsArr.map(({name, label}) => {
        const [first, second] = name;
      return (
         <button type ="button" className={clazzBtn} key = {label}>{first}<br/>{second}</button>
      );
    });
    return isLoan ? (
        <div className="loan-item">
            <h2 className="input-header">{header}</h2>
            <div className="btn-wrapper">
                { buttons }
            </div>
        </div>
    ) : (
        <div className="lease-item">
            <h2 className="input-header">{header}</h2>
            <input className="lease-input" type="number" min = {min} max = {max} step = {step} defaultValue = {defaultValue} />
        </div>
    );
  }
}
