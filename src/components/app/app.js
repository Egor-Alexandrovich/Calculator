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
        termMonthLease: 36
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
    render() {
      console.log(this.state);
      const { isLoan, tradeInValue, downPayment, zipCodeLease, zipCodeLoan, estimatedAPR, approxCreditScore, creditScoreValue, termMonthLoan,  dataInfoCard}  = this.state;
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
            onInputChange = {this.onInputChange}
            onSwitchTab = { this.onSwitchTab }/>
            <InfoCard dataInfoCard = {dataInfoCard}/>
        </div>

        
      );
    }
  }
