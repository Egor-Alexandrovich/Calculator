import React from 'react';
import './info-card.css';

const InfoCard = ({dealerInfo, isLoan, tradeInValue, downPayment, annualMiles, creditScoreValue, termMonthLease, termMonthLoan, estimatedAPR, zipCodeLease, zipCodeLoan  }) => {
    const { msrp, VehicleName, DealerName, DealerPhoneNumber, DealerRating } = dealerInfo;
    const monthlyPaymentLease = Math.round(((msrp - tradeInValue - downPayment) * annualMiles * creditScoreValue) / (10000 * termMonthLease));
    const monthlyPaymentLoan = Math.round((msrp - tradeInValue - downPayment) / (termMonthLoan * creditScoreValue * (1 + estimatedAPR / 100)));
    const taxesLease = String(zipCodeLease).split('').map(num => num * 11);
    const taxesLoan = String(zipCodeLoan).split('').map(num => num * 11);
    let MonthlyPayment = '';
    let taxes = '';
    isLoan ? MonthlyPayment = monthlyPaymentLoan : MonthlyPayment = monthlyPaymentLease;
    isLoan ? taxes = taxesLoan : taxes = taxesLease;
    taxes = taxes.join('');
  return (
        <div className="info-card">
            <div className="msrp info-card-item">
                <span>MSRP:</span>
                <span>${msrp}</span>
            </div>
            <div className="vehicle-name info-card-item">
                <span>Vehicle name:</span>
                <span>{VehicleName}</span>
            </div>
            <div className="monthly-payment info-card-item">
                <span>Monthly payment:</span>
                <span>$ {MonthlyPayment}</span>
            </div>
            <div className="taxes info-card-item">
                <span>taxes:</span>
                <span>$ {taxes}</span>
            </div>
            <div className="dealer-info">
                <span className="dealer-info-item">Dealer name: {DealerName}</span>
                <span className="dealer-info-item">Dealer phone number: <span className="tel">{DealerPhoneNumber}</span></span>
                <span className="dealer-info-item">Dealer rating: {DealerRating}%</span>
            </div>
        </div>
  );
};

export default InfoCard;