import React, { Component } from 'react';
import './tabs.css';

export default class Tabs extends Component {

  render() {
    const { isLoan, onSwitchTab } = this.props;
    let classNameLoan = 'header';
    let classNameLease = 'header'
    isLoan ? classNameLoan += ' active' : classNameLease += ' active';
    return (
      <div className="tabs">
        <button type="button" className={classNameLoan}
          onClick={() => onSwitchTab('loan')} >
          Loan</button>
        <button type="button" className={classNameLease}
          onClick={() => onSwitchTab('lease')} >
          Lease</button>
      </div>
    );
  }
}