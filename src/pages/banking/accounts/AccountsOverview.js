import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Wallet, Home, Car, PiggyBank, ChevronRight } from 'lucide-react';

const AccountsOverview = () => {
  const accountTypes = [
    {
      icon: Wallet,
      title: 'Savings Account',
      description: 'Regular savings account with attractive interest rates and flexible withdrawal options.',
      link: '/banking/accounts/savings',
      features: ['High Interest Rates', 'Zero Balance Requirements', 'Free Debit Card']
    },
    {
      icon: CreditCard,
      title: 'Current Account',
      description: 'Business current account with overdraft facility and unlimited transactions.',
      link: '/banking/accounts/current',
      features: ['Overdraft Facility', 'Unlimited Transactions', 'Business Banking']
    },
    {
      icon: Home,
      title: 'Term Deposit',
      description: 'Fixed term deposits with guaranteed returns and flexible tenure options.',
      link: '/banking/accounts/term-deposit',
      features: ['Guaranteed Returns', 'Flexible Tenure', 'High Interest']
    },
    {
      icon: PiggyBank,
      title: 'Fixed Deposit',
      description: 'Fixed deposits with attractive interest rates and quarterly compounding.',
      link: '/banking/accounts/fixed-deposit',
      features: ['Quarterly Compounding', 'Flexible Amounts', 'Premature Withdrawal']
    },
    {
      icon: Car,
      title: 'Recurring Deposit',
      description: 'Monthly recurring deposits to build your savings systematically.',
      link: '/banking/accounts/recurring-deposit',
      features: ['Monthly Deposits', 'Auto-debit Facility', 'Goal-based Savings']
    },
    {
      icon: Wallet,
      title: 'Lakshmi Deposit',
      description: 'Special deposit scheme for Lakshmi devotees with enhanced benefits.',
      link: '/banking/accounts/lakshmi-deposit',
      features: ['Devotee Benefits', 'Special Interest Rates', 'Flexible Terms']
    },
    {
      icon: PiggyBank,
      title: 'Kannika Deposit',
      description: 'Special deposit scheme for Kannika devotees with attractive returns.',
      link: '/banking/accounts/kannika-deposit',
      features: ['Devotee Benefits', 'Special Interest Rates', 'Flexible Terms']
    },
    {
      icon: Home,
      title: 'Pigmy Deposit',
      description: 'Daily small savings scheme for building substantial corpus over time.',
      link: '/banking/accounts/pigmy-deposit',
      features: ['Daily Savings', 'Small Amounts', 'Long-term Benefits']
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-trust-900 mb-4">Banking Accounts</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our wide range of banking accounts designed to meet your 
            personal and business financial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accountTypes.map((account, index) => (
            <Link
              key={index}
              to={account.link}
              className="group relative flex flex-col rounded-xl border border-gray-100 bg-white shadow-soft overflow-hidden transition-all duration-300 hover:shadow-premium-sm hover:-translate-y-1 border-t-4 border-t-blue-600"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {React.createElement(account.icon, { className: "w-6 h-6 text-cyan-600" })}
                  </div>
                  <ChevronRight className="w-5 h-5 text-trust-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-trust-600 shrink-0 mt-1" />
                </div>
                <h3 className="text-lg font-semibold text-trust-900 group-hover:text-trust-950 transition-colors">
                  {account.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-grow">
                  {account.description}
                </p>
                <span className="mt-4 self-end inline-flex items-center text-sm font-medium text-trust-700 group-hover:text-trust-800">
                  View details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-trust-50/50 to-gold-50/50 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Wallet className="w-12 h-12 text-trust-600" />
              <h3 className="text-2xl font-bold text-trust-900">Why Choose Us?</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We offer competitive interest rates, flexible terms, and personalized service 
              to help you achieve your financial goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">100%</div>
                <p className="text-gray-600">Secure</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">24/7</div>
                <p className="text-gray-600">Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">Low</div>
                <p className="text-gray-600">Fees</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Open an Account Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountsOverview;
