import React, { Component } from 'react';
import './app.css';
import Calculator from '../calculator';
import InfoCard from '../info-card';
import {dataInfoCard} from '../../utils/data-info-card';

console.log(dataInfoCard);
export default class App extends Component { 
    state = {
        dataInfoCard:dataInfoCard.msrp
    }
    render() {
      const {dataInfoCard}  = this.state;
      return (
        <div className="app">
            <Calculator />
            <InfoCard dataInfoCard = {dataInfoCard}/>
        </div>

        
      );
    }
  }
