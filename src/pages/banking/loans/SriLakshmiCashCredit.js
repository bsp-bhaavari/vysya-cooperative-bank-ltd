import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../../components/Card';

const SriLakshmiCashCredit = () => {
  const features = [
    'Cash credit facility for working capital needs',
    'Competitive interest rates',
    'Flexible repayment options',
    'Quick approval process',
    'Minimum documentation requirements',
    'Higher credit limits for eligible members',
    'Special benefits for long-term members'
  ];

  const eligibility = [
    'Must be a registered member',
    'Minimum 6 months of membership required',
    'Age between 18-65 years',
    'Regular income source required',
    'Good credit history preferred',
    'Basic KYC documents mandatory',
    'Business proof required'
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-trust-900 mb-4">Sri Lakshmi Cash Credit</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cash credit facility designed to meet your working capital requirements 
            with competitive interest rates and flexible repayment options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Loan Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-trust-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-trust-50/50 to-gold-50/50 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <CreditCard className="w-12 h-12 text-trust-600" />
              <h3 className="text-2xl font-bold text-trust-900">Working Capital</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Meet your business working capital needs with our flexible cash credit 
              facility and competitive interest rates.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">Flexible</div>
                <p className="text-gray-600">Limits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">Quick</div>
                <p className="text-gray-600">Approval</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">Easy</div>
                <p className="text-gray-600">Access</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Apply for Sri Lakshmi Cash Credit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SriLakshmiCashCredit;
