import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ChevronRight, Banknote } from 'lucide-react';

const LoansOverview = () => {
  const loans = [
    { name: 'Joint Loan', path: 'joint-loan', description: 'Joint loans for multiple applicants' },
    { name: 'Installment Loan', path: 'installment-loan', description: 'Easy monthly installment loans' },
    { name: 'Vehicle Loan', path: 'vehicle-loan', description: 'Get financing for your vehicle' },
    { name: 'Vasavi Vehicle Loan', path: 'vasavi-vehicle-loan', description: 'Personal car loan facility' },
    { name: 'NSCL Loan', path: 'nscl-loan', description: 'National Saving Certificate Loan' },
    { name: 'LIC Policy Loan', path: 'lic-policy-loan', description: 'Life Insurance Certificate policy Loan' },
    { name: 'Vasavambha Housing Loan', path: 'vasavambha-term-loan', description: 'Vasavambha Housing Loan' },
    { name: 'Machinery Loan', path: 'machinery-loan', description: 'Modernize your business' },
    { name: 'Gold Loan', path: 'gold-loan', description: 'Secure loans against gold ornaments' },
    { name: 'Sri Lakshmi Cash Credit', path: 'sri-lakshmi-cash-credit', description: 'Premium cash credit facility' },
    { name: 'Godown Loan', path: 'godown-loan', description: 'Loans against warehouse receipts' },
    { name: 'Warehouse Loan', path: 'warehouse-loan', description: 'Warehouse receipt loan facility' },
    { name: 'Cash Credit', path: 'cash-credit', description: 'Flexible working capital finance' },
    { name: 'Vasavi Cash Credit', path: 'vasavi-cash-credit', description: 'Vasavi cash credit facility' },
    { name: 'Deposit Loan', path: 'deposit-loan', description: 'Loan against fixed deposits' },
    { name: 'Vasavambha Term Loan', path: 'vasavambha-term-loan', description: 'Vasavambha Term Loan' },
    { name: 'Vasavambha Cash Credit', path: 'vasavambha-cash-credit', description: 'Vasavambha cash credit' },
    { name: 'Vasavambha Overdraft', path: 'vasavambha-overdraft-loan', description: 'Vasavambha overdraft facility' }
  ];

  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-white via-surface-tint/50 to-surface-muted/60 p-8 shadow-soft">
        <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-50" aria-hidden />
        <div className="relative">
          <div className="flex items-center gap-2 text-trust-700 font-semibold text-sm uppercase tracking-wider mb-2">
            <Landmark className="w-4 h-4" />
            Lending
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-trust-900 tracking-tight mb-3">
            Our Loan Products
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Explore tailored financing options with transparent terms, competitive rates, and dedicated support at every step.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {loans.map((loan, index) => (
          <Link
            key={loan.path}
            to={`/banking/loans/${loan.path}`}
            className="group relative flex flex-col rounded-xl border border-gray-100 bg-card-shine shadow-soft overflow-hidden transition-all duration-300 hover:shadow-premium-sm hover:-translate-y-1 border-t-4 border-t-blue-600"
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-trust-50 to-surface-tint border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Banknote className="w-6 h-6 text-trust-800" />
                </div>
                <ChevronRight className="w-5 h-5 text-trust-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-trust-600 shrink-0 mt-1" />
              </div>
              <h3 className="text-lg font-semibold text-trust-900 group-hover:text-trust-950 transition-colors">
                {loan.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-grow">
                {loan.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-trust-700 group-hover:text-trust-800">
                View details
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LoansOverview;
