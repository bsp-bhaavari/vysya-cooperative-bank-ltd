import React from 'react';
import { Link } from 'react-router-dom';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { accountsData } from '../../../data/bankingData';

const LakshmiDeposit = () => {
  const data = accountsData.cumulativeDeposit;

  const additionalSections = [
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/interest-rates/deposits"
        className="inline-flex items-center gap-2 bg-trust-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-300 shadow-md hover:-translate-y-0.5"
      >
        Click here to know current Interest Rates
      </Link>
      <Link
        to="/interest-rates/deposits"
        className="inline-flex items-center gap-2 border-2 border-trust-600 text-trust-600 px-6 py-3 rounded-lg font-semibold hover:bg-trust-50 transition-all duration-300"
      >
        Click here to see Interest Rates
      </Link>
    </div>
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <BankingPageTemplate 
          type="account" 
          data={data}
          additionalSections={additionalSections}
        />
      </div>
    </div>
  );
};

export default LakshmiDeposit;
