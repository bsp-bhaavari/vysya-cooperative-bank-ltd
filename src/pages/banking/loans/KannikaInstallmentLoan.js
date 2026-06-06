import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../../components/Card';

const KannikaInstallmentLoan = () => {
  const features = [
    'Special installment loan scheme for Kannika members',
    'Affordable interest rates and EMIs',
    'Flexible repayment tenure options',
    'Quick loan processing and approval',
    'Minimal documentation requirements',
    'Loan amounts based on membership tenure',
    'Special benefits for loyal customers'
  ];

  const eligibility = [
    'Must be a registered Kannika member',
    'Minimum 6 months of membership required',
    'Age between 18-65 years',
    'Regular income source required',
    'Good credit history preferred',
    'Basic KYC documents mandatory',
    'Co-applicants allowed for higher amounts'
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-trust-900 mb-4">Kannika Installment Loan</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Exclusive installment loan scheme designed for Kannika cooperative members with 
            competitive interest rates and flexible repayment options.
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
              <Calendar className="w-12 h-12 text-trust-600" />
              <h3 className="text-2xl font-bold text-trust-900">Flexible Repayment</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Choose from flexible repayment tenures ranging from 12 to 60 months 
              with affordable EMIs tailored to your budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">12</div>
                <p className="text-gray-600">Months</p>
                <p className="text-sm text-gray-500">Basic Plan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">24</div>
                <p className="text-gray-600">Months</p>
                <p className="text-sm text-gray-500">Standard Plan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-600 mb-2">36</div>
                <p className="text-gray-600">Months</p>
                <p className="text-sm text-gray-500">Extended Plan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Apply for Kannika Installment Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KannikaInstallmentLoan;
