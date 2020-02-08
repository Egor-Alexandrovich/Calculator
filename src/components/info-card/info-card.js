import React from 'react';
import './info-card.css';

const InfoCard = ({dataInfoCard}) => {
  return (
        <div className="info-card">
            <div className="msrp info-card-item">
                <span>MSRP:</span>
                <span>${dataInfoCard}</span>
            </div>
            <div className="vehicle-name info-card-item">
                <span>Vehicle name:</span>
                <span>Dodge Viper</span>
            </div>
            <div className="monthly-payment info-card-item">
                <span>Monthly payment:</span>
                <span>$ 850</span>
            </div>
            <div className="taxes info-card-item">
                <span>taxes:</span>
                <span>$ 3000</span>
            </div>
            <div className="dealer-info">
                <span className="dealer-info-item">Dealer name: Eric Kripke</span>
                <span className="dealer-info-item">Dealer phone number: <span className="tel">+ 800 795 795</span></span>
                <span className="dealer-info-item">Dealer rating: 80%</span>
            </div>
        </div>
  );
};

export default InfoCard;