import React, { Component } from 'react';
import './app.css';
import Calculator from '../calculator';
import InfoCard from '../info-card';
import { dataInfoCard } from '../../utils/data-info-card';
import { getIpInfo } from '../../utils/get-ip-info';
// import '../../data-dealer.json';

let currentState = {
  dealerInfo: {
    msrp : 23000,
    VehicleName : 'Dodge Viper',
    DealerName: 'Eric Kripke',
    DealerPhoneNumber: '+ 800 795 795',
    DealerRating: 80
},
  isLoan: true,
  tradeInValue:0,
  downPayment:0,
  zipCodeLease:"0",
  zipCodeLoan:"0",
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
  constructor () {
    super();
    this.updateZipCode();
    this.updateDealerInfo();
  } 
    state = {...currentState}
    updateZipCode() {
      if (!localStorage.getItem('currentState')) {
        getIpInfo().then((resp) => {
          this.setState( {
            zipCodeLease:resp.postal,
            zipCodeLoan:resp.postal 
          });
      });
      }
    }
    updateDealerInfo() {
      fetch('./data-dealer.json')
        .then((response) => response.json())
        .then((body) => {
          this.setState( {
            dealerInfo:{...body} 
          });
        });
    }
    onInputChange = (inputValue, inputName) => {
      this.setState( {
        [inputName]:inputValue 
      });
    }
    onSwitchTab = (text) => {
      let {isLoan} = this.state
      if(isLoan === true && text ==='lease') {
        this.setState((state) => {
          return {
            isLoan: !state.isLoan
          }
        });
      }
      if(isLoan === false && text ==='loan') {
        this.setState((state) => {
          return {
            isLoan: !state.isLoan
          }
        });
      }
    }
    getTermMonthLoan = (label) => {
      this.setState( {
        termMonthLoan: label 
      });
    }
    getMonthValueLease = (label) => {
      this.setState( {
        termMonthLease: label 
      });
    }
    getAnnualMiles = (label) => {
      this.setState( {
        annualMiles: label 
      });
    }
    getApproxValueLease = (label) => {
      let item = 0;
      if(label >= 750) {item = 0.95}
      if(label == 700) {item = 1}
      if(label == 650) {item = 1.05}
      if(label == 600) {item = 1.2} 
      this.setState( {
        creditScoreValue: item,
        approxCreditScore: label
      });
    }
    getApproxValue = (label) => {
      let item = 0;
      if(label === 0.95) {item = 750}
      if(label === 1) {item = 700}
      if(label === 1.05) {item = 650}
      if(label === 1.2) {item = 600}    
      this.setState( {
        creditScoreValue: label,
        approxCreditScore: item
      });
    }
    render() {
      console.log(this.state);
      localStorage.setItem('currentState', JSON.stringify(this.state));
      const { isLoan, tradeInValue, downPayment, zipCodeLease, zipCodeLoan, estimatedAPR, approxCreditScore, creditScoreValue, termMonthLoan, termMonthLease, annualMiles, dealerInfo}  = this.state;
      const { msrp } = dealerInfo;
      const monthlyPaymentLease = Math.round(((msrp - tradeInValue - downPayment) * annualMiles * creditScoreValue) / (10000 * termMonthLease)); 
      const monthlyPaymentLoan = Math.round((msrp - tradeInValue - downPayment)*(termMonthLoan * creditScoreValue * estimatedAPR));
      const taxesLease = String(zipCodeLease).split('').map(num => num * 11);
      const taxesLoan = String(zipCodeLoan).split('').map(num => num * 11);
      console.log(monthlyPaymentLease, monthlyPaymentLoan)
      return (
        <div className="app">
            <Calculator
            isLoan = {isLoan}
            tradeInValue = {tradeInValue}
            downPayment = {downPayment}
            zipCodeLease = { zipCodeLease }
            zipCodeLoan = { zipCodeLoan }
            estimatedAPR = { estimatedAPR}
            approxCreditScore = { approxCreditScore }
            creditScoreValue = { creditScoreValue }
            termMonthLoan = { termMonthLoan }
            termMonthLease = { termMonthLease }
            annualMiles = { annualMiles }
            msrp = { msrp }
            getApproxValueLease = {this.getApproxValueLease}
            getMonthValueLease = {this.getMonthValueLease} 
            getAnnualMiles = {this.getAnnualMiles}
            getApproxValue = { this.getApproxValue }
            getTermMonthLoan = { this.getTermMonthLoan }
            onInputChange = { this.onInputChange }
            onSwitchTab = { this.onSwitchTab }/>
            <InfoCard dealerInfo = {dealerInfo}
                      isLoan = { isLoan }
                      monthlyPaymentLease = { monthlyPaymentLease }
                      monthlyPaymentLoan = { monthlyPaymentLoan }
                      taxesLease = { taxesLease }
                      taxesLoan = { taxesLoan }/>
        </div>

        
      );
    }
  }
