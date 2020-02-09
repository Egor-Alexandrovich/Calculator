import React, { Component } from 'react';
import './tabs.css';

export default class Tabs extends Component {
  
  render() {
    const { isLoan, onSwitchTab } = this.props;
    let classNameLoan = 'header';
    let classNameLease = 'header'
    isLoan ? classNameLoan +=' active':classNameLease+=' active';
    return (
    <div className="tabs">
        <div className={ classNameLoan }
             onClick =  {() => onSwitchTab('loan') } >
             Loan</div>
        <div className={ classNameLease }
        onClick =  { () => onSwitchTab('lease') } >
        Lease</div>
    </div>
    );
  }
}