import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, Clock, CheckCircle, AlertCircle, Search } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const branchData = [
  {
    name: 'Head Office',
    lockers: [
      { size: '4.5 X 6', advance: 6000, rent: 400 },
      { size: '7 x 9.5', advance: 10000, rent: 500 },
      { size: '4.5 X 12', advance: 14000, rent: 1000 },
      { size: '7 x 20', advance: 14000, rent: 1000 },
      { size: '9 X 12', advance: 14000, rent: 1000 },
      { size: '10.5 x 13', advance: 18000, rent: 2000 },
      { size: '15 x 20', advance: 30000, rent: 3000 },
    ]
  },
  {
    name: 'APMC Tumakuru',
    lockers: [
      { size: '10.5 x 13', advance: 18000, rent: 2000 },
      { size: '15 x 21', advance: 30000, rent: 3000 },
      { size: '25 X 20', advance: 50000, rent: 4000 },
    ]
  },
  {
    name: 'SIT Tumakuru',
    lockers: [
      { size: '10.5 x 13', advance: 18000, rent: 2000 },
      { size: '15 x 21', advance: 30000, rent: 3000 },
      { size: '25 X 20', advance: 50000, rent: 4000 },
    ]
  },
  {
    name: 'Pavagada',
    lockers: [
      { size: '6 x 7.5', advance: 6000, rent: 400 },
      { size: '7 x 9.5', advance: 10000, rent: 500 },
      { size: '6 x 16', advance: 14000, rent: 1000 },
      { size: '7 x 20', advance: 14000, rent: 1000 },
      { size: '12 x 7.5', advance: 14000, rent: 1000 },
      { size: '10.5 x 13', advance: 18000, rent: 2000 },
      { size: '12 x 16', advance: 18000, rent: 2000 },
      { size: '15.5 x 20', advance: 30000, rent: 3000 },
    ]
  },
  {
    name: 'Madhugiri',
    lockers: [
      { size: '6 x 7.5', advance: 6000, rent: 400 },
      { size: '7 x 9.5', advance: 10000, rent: 500 },
      { size: '6 X 16', advance: 14000, rent: 1000 },
      { size: '7 x 20', advance: 14000, rent: 1000 },
      { size: '10.5 x 13', advance: 18000, rent: 2000 },
      { size: '12 x 16', advance: 18000, rent: 2000 },
      { size: '15 X 20', advance: 30000, rent: 3000 },
    ]
  },
  {
    name: 'APMC Bengaluru',
    lockers: [
      { size: '6 x 8', advance: 6000, rent: 400 },
      { size: '5 x 15', advance: 14000, rent: 1000 },
      { size: '12 x 8', advance: 14000, rent: 1000 },
      { size: '11 x 15', advance: 18000, rent: 2000 },
    ]
  },
  {
    name: 'BVK Bengaluru',
    lockers: [
      { size: '15 x 21', advance: 30000, rent: 3000 },
      { size: '25 X 20', advance: 50000, rent: 4000 },
    ]
  },
  {
    name: 'Mysore',
    lockers: [
      { size: '6 X 8', advance: 6000, rent: 400 },
      { size: '7.6 X 10', advance: 10000, rent: 500 },
      { size: '6 X 17', advance: 14000, rent: 1000 },
      { size: '7.6 X 20.6', advance: 14000, rent: 1000 },
      { size: '12 X 8', advance: 14000, rent: 1000 },
      { size: '11 X 14', advance: 18000, rent: 2000 },
      { size: '12 x 16', advance: 18000, rent: 2000 },
      { size: '15.6 X 21', advance: 30000, rent: 3000 },
    ]
  }
];

const Lockers = () => {
  const [searchBranch, setSearchBranch] = useState('');

  const features = [
    'Advanced security systems',
    '24/7 CCTV surveillance',
    'Biometric access control',
    'Fire-resistant construction',
    'Climate control facility',
    'Individual locker keys',
    'Nomination facility',
    'Flexible rental options'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Advanced security systems with 24/7 monitoring and surveillance'
    },
    {
      icon: Lock,
      title: 'Complete Privacy',
      description: 'Your valuables remain private and confidential at all times'
    },
    {
      icon: Clock,
      title: 'Flexible Access',
      description: 'Access your locker during banking hours with prior notice'
    }
  ];

  const documents = [
    'Account with our bank (minimum 6 months old)',
    'KYC documents (Aadhaar, PAN, Address proof)',
    'Photograph of locker hirer and nominee',
    'Nomination form duly filled',
    'Locker agreement form',
    'Identity verification'
  ];

  const filteredBranches = branchData.filter(b =>
    b.name.toLowerCase().includes(searchBranch.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
          <Lock className="w-8 h-8 text-trust-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-trust-900">Locker Facility</h1>
          <p className="text-gray-600">Secure your valuables in our bank lockers</p>
        </div>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">
        Keep your valuables safe and secure with our bank locker facility. We offer various sizes
        of lockers with advanced security features, 24/7 surveillance, and complete privacy for
        your peace of mind.
      </p>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle>Locker Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">4</div>
              <p className="text-gray-600">Locker Sizes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">24/7</div>
              <p className="text-gray-600">Security</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">100%</div>
              <p className="text-gray-600">Private</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">Flexible</div>
              <p className="text-gray-600">Access</p>
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
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Why Choose Our Lockers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(benefits || []).map((benefit, index) => (
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

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Branch Wise Revised Locker Rent List - 2023</h2>
        <p className="text-gray-600 mb-4">GST included in the revised rent amounts.</p>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search branch..."
            value={searchBranch}
            onChange={(e) => setSearchBranch(e.target.value)}
            className="form-input pl-10"
          />
        </div>

        <div className="grid gap-6">
          {filteredBranches.map((branch, bIdx) => (
            <Card key={bIdx}>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-trust-700">{branch.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Sl. No.</th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Locker Size</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Advance Amount</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Revised Rent (incl. GST)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {branch.lockers.map((locker, lIdx) => (
                        <tr key={lIdx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-2 px-3 text-gray-600">{lIdx + 1}</td>
                          <td className="py-2 px-3 font-medium text-gray-900">{locker.size}</td>
                          <td className="py-2 px-3 text-right text-gray-700">₹{locker.advance.toLocaleString('en-IN')}</td>
                          <td className="py-2 px-3 text-right font-semibold text-trust-600">₹{locker.rent.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Eligibility & Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Eligibility Criteria</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Individual customers (singly/jointly)</li>
                  <li>• HUFs, Partnership firms, Companies</li>
                  <li>• Societies and Trusts</li>
                  <li>• Minimum account age: 6 months</li>
                  <li>• Satisfactory credit history</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Documents Required</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {(documents || []).map((doc, index) => (
                    <li key={index}>• {doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access & Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Access Timings</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Monday to Friday: 10:00 AM - 4:00 PM</li>
                  <li>• Saturday: 10:00 AM - 2:00 PM</li>
                  <li>• Sunday: Closed</li>
                  <li>• Prior notice required for access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trust-900 mb-3">Operating Instructions</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Two keys provided (one for bank, one for customer)</li>
                  <li>• Both keys required to open locker</li>
                  <li>• Biometric verification mandatory</li>
                  <li>• Access log maintained for each visit</li>
                </ul>
              </div>
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
                The bank is not responsible for the contents of the locker. Locker facility is provided
                only for safe custody of valuables.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                Locker rent is payable annually in advance. Late payment attracts penalty charges.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                In case of lost key, charges for breaking open the locker and key replacement will be applicable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-trust-900 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Secure Your Valuables Today</h3>
          <p className="text-trust-200 mb-6 max-w-2xl mx-auto">
            Visit your nearest branch to book a locker or contact our customer service for more information.
            Protect your precious valuables with our secure locker facility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-trust-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Book Locker
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-trust-900 font-medium py-3 px-8 rounded-lg transition-all">
              Know More
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lockers;
