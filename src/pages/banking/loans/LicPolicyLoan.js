import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../../components/Card';

const LicPolicyLoan = () => {
  const features = [
    'Loan against LIC policy documents',
    'Competitive interest rates',
    'Flexible repayment tenure',
    'Quick documentation verification',
    'Higher loan amounts based on policy value',
    'Minimum processing time',
    'Special benefits for policy holders'
  ];

  const eligibility = [
    'Valid LIC policy document required',
    'Policy should have surrender value',
    'Minimum 1 year of policy completion',
    'Age between 18-65 years',
    'Regular income source required',
    'Basic KYC documents mandatory',
    'Policy must be assigned to bank'
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-trust-900 mb-4">LIC Policy Loan</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get loans against your LIC policy documents with competitive interest rates 
            and flexible repayment options designed for your convenience.
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
              <FileText className="w-12 h-12 text-trust-600" />
              <h3 className="text-2xl font-bold text-trust-900">Policy Based</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Loan amount determined by the surrender value of your LIC policy. 
              Higher policy values can help you get larger loan amounts.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-2xl font-bold text-trust-600 mb-2">Up to 85%</div>
                <p className="text-gray-600">of Policy Value</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-2xl font-bold text-trust-600 mb-2">Quick</div>
                <p className="text-gray-600">Processing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Apply for LIC Policy Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LicPolicyLoan;
