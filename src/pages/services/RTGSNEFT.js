import React from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const RTGSNEFT = () => {
  const features = [
    'Secure fund transfer to any bank account',
    'Available through all banking channels',
    'Real-time transaction tracking',
    'Confirmation via SMS and email',
    'Competitive charges',
    'Nationwide coverage'
  ];

  const charges = [
    ['Up to Rs.1 Lakh', 'Rs.15 + GST = 17.70', 'Per Transaction'],
    ['Rs.1 Lakh to Rs.5 Lakh', 'Rs.30 + GST = 35.40', 'Per Transaction'],
    ['Rs.5 Lakh to Rs.10 Lakh', 'Rs.40 + GST = 47.20', 'Per Transaction'],
    ['Above Rs.10 Lakhs', 'Rs.110 + GST = 129.80', 'Per Transaction'],
    ['GST Payment', 'Rs.50 + GST = 59.00', 'Per Transaction'],
    ['ITD Payment', 'Rs.100 + GST = 118.00', 'Per Transaction']
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
          <Send className="w-8 h-8 text-trust-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-trust-900">RTGS/NEFT Services</h1>
          <p className="text-gray-600">Secure and instant fund transfer solutions</p>
        </div>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">
        Transfer funds securely to any bank account in India using our RTGS (Real Time Gross Settlement) 
        and NEFT (National Electronic Funds Transfer) services.
      </p>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle>Service Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">24/7</div>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">Instant</div>
              <p className="text-gray-600">RTGS</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">Hourly</div>
              <p className="text-gray-600">NEFT Batches</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {(features || []).map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">RTGS Charges</h2>
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-trust-900 text-white">
                    <th className="px-6 py-3 text-left font-semibold">Amount</th>
                    <th className="px-6 py-3 text-left font-semibold">Charges</th>
                    <th className="px-6 py-3 text-left font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {charges.map((charge, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-trust-50/60 transition-colors border-b border-gray-200`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">{charge[0]}</td>
                      <td className="px-6 py-4 text-gray-700">{charge[1]}</td>
                      <td className="px-6 py-4 text-gray-700">{charge[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <span>Important Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                RTGS is available 24x7 for all customer transactions. NEFT is also available 24x7 with hourly settlement batches.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                Ensure correct beneficiary details as the bank is not responsible for incorrect transfers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-trust-900 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Start Transferring Funds Today</h3>
          <p className="text-trust-200 mb-6 max-w-2xl mx-auto">
            Experience seamless fund transfers with our RTGS/NEFT services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-trust-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Register Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-trust-900 font-medium py-3 px-8 rounded-lg transition-all">
              Get Help
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RTGSNEFT;
