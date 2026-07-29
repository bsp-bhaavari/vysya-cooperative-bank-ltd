import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';
import { interestRatesData } from '../../data/bankingData';

const DepositRates = () => {
  const depositRates = interestRatesData.deposits;

  const tableHeaders = ['Tenure', 'Interest Rate'];

  const tableData = (depositRates || []).map(deposit => {
    const tenure = deposit.depositName === '50 Lakhs & Above (1–5 Years)'
      ? `${deposit.depositName} (${deposit.note})`
      : deposit.depositName;
    return [tenure, deposit.interestRate];
  });

  const importantNotes = [
    'Interest rates are subject to change without prior notice',
    'Senior citizen benefits: Additional 0.50% on deposits above 1 year for customers aged 60 years and above',
    'TDS will be deducted as per Income Tax Act provisions',
    'Interest is calculated on daily balance and paid half yearly for savings account',
    'Premature withdrawal penalties may apply',
    'For detailed terms and conditions, please contact branch',
    'Rates may vary based on deposit amount and tenure'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-trust-900 mb-4 tracking-tight">Deposit Interest Rates</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Attractive interest rates on all our deposit products with special benefits for senior citizens and long-term deposits.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Deposit Interest Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table 
              headers={tableHeaders}
              data={tableData}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-gold-50/50 to-surface-tint border-l-4 border-gold-500 border border-gray-100">
        <CardHeader>
          <CardTitle>Special Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-trust-900 mb-3">Senior Citizen Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li>• Additional 0.50% interest on deposits above 1 year</li>
                <li>• Priority service at all branches</li>
                <li>• Free demand drafts up to ₹25,000/month</li>
                <li>• Dedicated customer service helpline</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-trust-900 mb-3">Long-Term Deposit Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li>• Higher rates for deposits above 1 year</li>
                <li>• Loan facility against deposit up to 85%</li>
                <li>• Auto-renewal option available</li>
                <li>• Quarterly interest payment option</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-surface-tint border-l-4 border-trust-700 border border-gray-100">
        <CardHeader>
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {(importantNotes || []).map((note, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-trust-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-700 leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="relative overflow-hidden bg-gradient-to-br from-trust-800 via-trust-900 to-trust-950 text-white rounded-xl p-8 text-center border border-trust-800/40 shadow-premium">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-trust-950/30 to-transparent" aria-hidden />
        <div className="relative">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Start Saving Today</h2>
          <p className="text-xl mb-6 text-trust-200/90 max-w-2xl mx-auto">
            Open a deposit account with us and enjoy competitive rates with secure banking
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-trust-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-trust-700 transition-all duration-300 shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Open Deposit Account
            </Link>
            <Link 
              to="/banking/accounts" 
              className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/12 transition-all duration-300"
            >
              View All Accounts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositRates;
