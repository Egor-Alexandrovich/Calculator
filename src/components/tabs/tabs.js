import React, { Component } from 'react';
import './tabs.css';

export default class Tabs extends Component {
  
  render() {
    
    return (
    <div className="tabs">
        <div className="header">Loan</div>
        <div className="header">Lease</div>
    </div>
    );
  }
}