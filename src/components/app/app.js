import React, { Component } from 'react';
import './app.css';
import Calculator from '../calculator';
import InfoCard from '../info-card';
import {dataInfoCard} from '../../utils/data-info-card';

console.log(dataInfoCard);
export default class App extends Component { 
    state = {
        dataInfoCard:dataInfoCard.msrp,
        isLoan: true,
        tradeInValue:0,
        downPayment:0,
        zipCodeLease:220007,
        zipCodeLoan:220008,
        estimatedAPR: 0,
        approxCreditScore: 750,
        creditScoreValue : 0.95,
        termMonthLoan: 24,
        termMonthLease: 36,
        annualMiles: 12000
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
      const { isLoan, tradeInValue, downPayment, zipCodeLease, zipCodeLoan, estimatedAPR, approxCreditScore, creditScoreValue, termMonthLoan, termMonthLease, annualMiles, dataInfoCard}  = this.state;
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
            getApproxValueLease = {this.getApproxValueLease}
            getMonthValueLease = {this.getMonthValueLease} 
            getAnnualMiles = {this.getAnnualMiles}
            getApproxValue = { this.getApproxValue }
            getTermMonthLoan = { this.getTermMonthLoan }
            onInputChange = { this.onInputChange }
            onSwitchTab = { this.onSwitchTab }/>
            <InfoCard dataInfoCard = {dataInfoCard}/>
        </div>

        
      );
    }
  }
