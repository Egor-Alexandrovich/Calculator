import React, { Component } from 'react';
import './input-btn-or-number.css';

export default class InputBtnOrNumber extends Component {
  getInputValue = (event) => {
    const term = parseInt(event.target.value);
    this.props.getInputValue(term);
  };
  render() {
    const { isLoan, header, min, max, step, value, buttonsArr, filter, clazz, getBtnValue } = this.props;
    let buttons = [];
    if (isLoan) {
      buttons = buttonsArr.map(({ name, label }) => {
        let clazzBtn = clazz ? `btn ${clazz}` : 'btn';
        const [first, second] = name;
        if (filter == label) { clazzBtn += ' active' }
        return (
          <button type="button"
            onClick={() => getBtnValue(label)}
            className={clazzBtn}
            key={label}>
            {first}<br />{second}</button>
        );
      });
    }
    return isLoan ? (
      <div className="loan-item">
        <h2 className="input-header">{header}</h2>
        <div className="btn-wrapper">
          {buttons}
        </div>
      </div>
    ) : (
        <div className="lease-item">
          <h2 className="input-header">{header}</h2>
          <input className="lease-input"
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={this.getInputValue} />
        </div>
      );
  }
}
