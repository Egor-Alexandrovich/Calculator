import React, { Component } from 'react';
import './app.css';
import Calculator from '../calculator';
import InfoCard from '../info-card';
import { getIpInfo } from '../../utils/get-ip-info';
import Spinner from '../spinner';

let currentState = {
  isLoan: true,
  zipCodeLease:"0",
  zipCodeLoan:"0",
  tradeInValue:0,
  downPayment:0,
  estimatedAPR: 0,
  approxCreditScore: 750,
  creditScoreValue : 0.95,
  termMonthLoan: 24,
  termMonthLease: 36,
  annualMiles: 12000
};
//  get the state from  localStorage
if (localStorage.getItem('currentState')) {
  currentState = JSON.parse(localStorage.getItem('currentState'));
}
    
export default class App extends Component {
  constructor() {
    super();
    this.updateZipCode();
    this.updateDealerInfo();
  }
  state = {
    loading: true,
    ...currentState
  }

  updateZipCode() {
    if (!localStorage.getItem('currentState')) {
      getIpInfo().then((resp) => {
        this.setState({
          zipCodeLease: resp.postal,
          zipCodeLoan: resp.postal
        });
      });
    }
  }
  updateDealerInfo() {
    fetch('./data-dealer.json')
      .then((response) => response.json())
      .then((body) => {
        setTimeout(() => {
          this.setState({
            dealerInfo: { ...body },
            loading: false
          });
        }, 1000);
      });
  }
  onInputChange = (inputValue, inputName) => {
    this.setState({
      [inputName]: inputValue
    });
  }
  onSwitchTab = (text) => {
    let { isLoan } = this.state
    if (isLoan === true && text === 'lease') {
      this.setState((state) => {
        return {
          isLoan: !state.isLoan
        }
      });
    }
    if (isLoan === false && text === 'loan') {
      this.setState((state) => {
        return {
          isLoan: !state.isLoan
        }
      });
    }
  }
  getTermMonthLoan = (label) => {
    this.setState({
      termMonthLoan: label
    });
  }
  getMonthValueLease = (label) => {
    this.setState({
      termMonthLease: label
    });
  }
  getAnnualMiles = (label) => {
    this.setState({
      annualMiles: label
    });
  }
  getApproxValueLease = (label) => {
    let item = 0;
    if (label >= 750) { item = 0.95 }
    if (label == 700) { item = 1 }
    if (label == 650) { item = 1.05 }
    if (label == 600) { item = 1.2 }
    this.setState({
      creditScoreValue: item,
      approxCreditScore: label
    });
  }
  getApproxValue = (label) => {
    let item = 0;
    if (label === 0.95) { item = 750 }
    if (label === 1) { item = 700 }
    if (label === 1.05) { item = 650 }
    if (label === 1.2) { item = 600 }
    this.setState({
      creditScoreValue: label,
      approxCreditScore: item
    });
  }
  render() {
    const { loading, dealerInfo, ...currentState } = this.state;
    if (loading) { return <Spinner /> }
    localStorage.setItem('currentState', JSON.stringify({ ...currentState }));
    return (
      <div className="app">
        <Calculator
          dealerInfo={dealerInfo}
          {...currentState}
          getApproxValueLease={this.getApproxValueLease}
          getMonthValueLease={this.getMonthValueLease}
          getAnnualMiles={this.getAnnualMiles}
          getApproxValue={this.getApproxValue}
          getTermMonthLoan={this.getTermMonthLoan}
          onInputChange={this.onInputChange}
          onSwitchTab={this.onSwitchTab} />
        <InfoCard
          dealerInfo={dealerInfo}
          {...currentState} />
      </div>
    );
  }
  }

