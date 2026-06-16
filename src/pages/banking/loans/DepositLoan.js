import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

export default function DepositLoan() {
  const data = loansData.depositLoan;

  return (
    <div className="section-padding">
      <div className="container-max">
        <BankingPageTemplate 
          type="loan" 
          data={data}
          hideRepaymentDetails={true}
          processingTime="Immediate"
          processingResponse="Loan approval is immediate upon submission of complete documentation."
        />
      </div>
    </div>
  );
}
