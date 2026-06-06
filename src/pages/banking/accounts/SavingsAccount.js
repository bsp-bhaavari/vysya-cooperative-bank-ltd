import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, TrendingUp, Shield, CreditCard, CheckCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../../components/Card';

const SavingsAccount = () => {
  const features = [
    'Competitive interest rates',
    'Zero balance account option',
    'Free debit card facility',
    'Mobile and internet banking',
    'SMS alerts for transactions',
    'Nomination facility available',
    'Joint account facility',
    'Passbook facility'
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Earn Interest',
      description: 'Earn competitive interest rates on your savings balance'
    },
    {
      icon: Shield,
      title: 'Secure Banking',
      description: 'Your savings are protected with advanced security features'
    },
    {
      icon: CreditCard,
      title: 'Easy Access',
      description: 'Access your funds anytime through ATM, mobile, or internet banking'
    }
  ];

  const documents = [
    'Identity Proof (Aadhaar/PAN/Passport)',
    'Address Proof (Utility Bill/Rent Agreement)',
    'PAN Card (mandatory)',
    'Passport size photographs',
    'KYC form duly filled'
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Savings Account</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            A savings account is an interest-bearing deposit account. A savings account is a basic type of bank account that allows you to deposit money, keep it safe, and withdraw funds, all while earning interest on balance on a daily basis. Minimum Balance to be maintained in the Account is ₹500/-
          </p>
          <p className="font-semibold">Bank allows opening of SB accounts for the following category:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>An individual in his own name</li>
            <li>More than one person in their joint names</li>
            <li>A guardian on behalf of the minor</li>
          </ul>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PiggyBank className="w-6 h-6 text-trust-600" />
            <span>Account Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">3.5% - 4.0%</div>
              <p className="text-gray-600">Interest Rate p.a.</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">₹0</div>
              <p className="text-gray-600">Minimum Balance</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">Free</div>
              <p className="text-gray-600">Debit Card</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Why Choose Our Savings Account</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent>
                <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(benefit.icon, { className: "w-8 h-8 text-trust-600" })}
                </div>
                <h3 className="text-lg font-semibold text-trust-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Eligibility Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700">Individuals aged 18 years and above</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700">Minors can open account with guardian</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700">Valid KYC documents required</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-trust-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700">Resident Indian citizens</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documents Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold-600 text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interest Calculation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Interest Rates</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Balance up to ₹1 Lakh:</span>
                    <span className="font-medium">3.5% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Balance ₹1 Lakh - ₹5 Lakh:</span>
                    <span className="font-medium">3.75% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Balance above ₹5 Lakh:</span>
                    <span className="font-medium">4.0% p.a.</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Calculation Method</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Interest calculated on daily balance</li>
                  <li>• Credited quarterly on March 31, June 30, Sep 30, Dec 31</li>
                  <li>• TDS applicable as per income tax rules</li>
                  <li>• No penalty on premature withdrawal</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-trust-800 via-trust-900 to-trust-950 text-white border-trust-800/35 shadow-premium" hover={false}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-trust-950/30 to-transparent" aria-hidden />
        <CardContent className="relative text-center py-8">
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready to Start Saving?</h3>
          <p className="text-trust-200/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Open your savings account today and take the first step towards financial security. 
            Our dedicated team is here to assist you with the account opening process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-trust-600 text-white hover:bg-trust-700 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:-translate-y-0.5">
              Open Account
            </Link>
            <Link to="/contact" className="border-2 border-white/85 text-white hover:bg-white/12 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Know More
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SavingsAccount;
