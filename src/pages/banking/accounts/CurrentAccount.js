import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, CreditCard, CheckCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../../components/Card';

const CurrentAccount = () => {
  const features = [
    'High transaction volume support',
    'Overdraft facility available',
    'Free NEFT/RTGS transactions',
    'Business debit card with higher limits',
    'Mobile and internet banking',
    'SMS alerts for transactions',
    'Multiple signatory facility',
    'Quarterly statements'
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Support your business transactions with flexible banking solutions'
    },
    {
      icon: Building2,
      title: 'Professional Banking',
      description: 'Designed specifically for business and professional needs'
    },
    {
      icon: CreditCard,
      title: 'Enhanced Limits',
      description: 'Higher transaction limits and overdraft facilities'
    }
  ];

  const documents = [
    'Business Registration Certificate',
    'PAN Card of Business/Proprietor',
    'Address Proof of Business',
    'Identity Proof of Signatories',
    'Partnership Deed (if applicable)',
    'MOA & AOA (for companies)',
    'GST Registration (if applicable)'
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Current Account</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Current Account is particularly meant for Business class. This account can be opened by Business people like Traders, Businessmen, Corporate Bodies, Wholesalers, Retailers, Distributors, Super market chains etc. who operate the account frequently.
          </p>
          <p>
            The account holder should have to maintain a minimum Balance of ₹2,000.00.
          </p>
          <p>
            Customers may attend a bank branch for cash withdrawals, financial advice, and other banking transactions. Cheques are the traditional method of making withdrawals.
          </p>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-trust-600" />
            <span>Account Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">₹2,000</div>
              <p className="text-gray-600">Minimum Balance</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">Free</div>
              <p className="text-gray-600">NEFT/RTGS</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">High</div>
              <p className="text-gray-600">Transaction Limits</p>
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
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Why Choose Our Current Account</h2>
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
            <CardTitle>Account Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-trust-50/30 rounded-lg">
                <h4 className="font-semibold text-trust-900 mb-2">Standard Current Account</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Minimum Balance: ₹10,000</li>
                  <li>• Free 50 transactions per month</li>
                  <li>• Basic overdraft facility</li>
                </ul>
              </div>
              <div className="p-4 bg-gold-50/30 rounded-lg">
                <h4 className="font-semibold text-trust-900 mb-2">Premium Current Account</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Minimum Balance: ₹25,000</li>
                  <li>• Free 200 transactions per month</li>
                  <li>• Enhanced overdraft facility</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-trust-900 mb-2">Platinum Current Account</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Minimum Balance: ₹50,000</li>
                  <li>• Unlimited free transactions</li>
                  <li>• Priority banking services</li>
                </ul>
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
          <CardTitle>Overdraft Facility</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Features</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Up to 75% of average balance</li>
                  <li>• Interest charged only on utilized amount</li>
                  <li>• Flexible repayment terms</li>
                  <li>• Quick approval process</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Interest Rates</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard Account:</span>
                    <span className="font-medium">Base Rate + 4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Premium Account:</span>
                    <span className="font-medium">Base Rate + 3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platinum Account:</span>
                    <span className="font-medium">Base Rate + 2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-trust-800 via-trust-900 to-trust-950 text-white border-trust-800/35 shadow-premium" hover={false}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-trust-950/30 to-transparent" aria-hidden />
        <CardContent className="relative text-center py-8">
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Open Your Business Account Today</h3>
          <p className="text-trust-200/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Take your business to the next level with our comprehensive current account solutions. 
            Our relationship managers are ready to assist you with the account opening process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-trust-600 text-white hover:bg-trust-700 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:-translate-y-0.5">
              Open Account
            </Link>
            <Link to="/contact" className="border-2 border-white/85 text-white hover:bg-white/12 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Schedule Meeting
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentAccount;
