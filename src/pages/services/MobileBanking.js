import React from 'react';
import { Smartphone, Shield, Clock, CheckCircle, Download } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const MobileBanking = () => {
  const features = [
    '24/7 account access',
    'Fund transfers (NEFT, RTGS, IMPS, UPI)',
    'Bill payments and recharges',
    'Mobile/DTH recharges',
    'Booking services (flights, hotels, buses)',
    'Investment options',
    'Loan management',
    'Card management'
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: 'Bank on the Go',
      description: 'Access all banking services from your smartphone anytime, anywhere'
    },
    {
      icon: Shield,
      title: 'Secure Banking',
      description: 'Advanced security features with biometric authentication and encryption'
    },
    {
      icon: Clock,
      title: 'Instant Services',
      description: 'Real-time transactions with instant confirmation and updates'
    }
  ];

  const services = [
    {
      name: 'Account Services',
      items: ['Balance inquiry', 'Mini statement', 'Account details', 'Transaction history']
    },
    {
      name: 'Fund Transfer',
      items: ['IMPS', 'NEFT/RTGS', 'UPI', 'Account to account transfer']
    },
    {
      name: 'Bill Payments',
      items: ['Electricity bills', 'Water bills', 'Gas bills', 'Credit card bills']
    },
    {
      name: 'Recharges',
      items: ['Mobile recharge', 'DTH recharge', 'Data card recharge', 'Metro card recharge']
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Download App',
      description: 'Download our mobile banking app from Google Play Store or Apple App Store'
    },
    {
      step: '2',
      title: 'Register',
      description: 'Register using your account number and follow the simple verification process'
    },
    {
      step: '3',
      title: 'Set MPIN',
      description: 'Create your secure 6-digit MPIN for quick login and transactions'
    },
    {
      step: '4',
      title: 'Start Banking',
      description: 'Enjoy seamless banking with all services at your fingertips'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center bg-trust-50 border border-trust-200 rounded-lg py-3 px-6">
        <p className="text-trust-700 font-semibold text-sm tracking-wider uppercase">VERY SHORTLY</p>
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
          <Smartphone className="w-8 h-8 text-trust-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-trust-900">Mobile Banking</h1>
          <p className="text-gray-600">Bank anytime, anywhere with our mobile app</p>
        </div>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">
        Experience the future of banking with our comprehensive mobile banking app. Manage your accounts, 
        transfer funds, pay bills, and access a wide range of banking services from your smartphone. 
        Secure, convenient, and designed for your lifestyle.
      </p>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle>App Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">48+</div>
              <p className="text-gray-600">Banking Services</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">4.8★</div>
              <p className="text-gray-600">App Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">1M+</div>
              <p className="text-gray-600">Downloads</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600 mb-1">256-bit</div>
              <p className="text-gray-600">Encryption</p>
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
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Why Choose Mobile Banking</h2>
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

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Available Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {(services || []).map((service, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-trust-900 mb-2">{service.name}</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {(service.items || []).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Biometric Authentication</p>
                  <p className="text-sm text-gray-600">Fingerprint and face recognition support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Secure MPIN</p>
                  <p className="text-sm text-gray-600">6-digit PIN for quick and secure access</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Session Timeout</p>
                  <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Encryption</p>
                  <p className="text-sm text-gray-600">256-bit SSL encryption for all transactions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">How to Get Started</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {(steps || []).map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent>
                <div className="w-12 h-12 bg-trust-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-trust-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-trust-600 to-gold-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Download Our Mobile App</h3>
          <p className="text-trust-200/80 mb-6 max-w-2xl mx-auto">
            Start banking on the go! Download our mobile app from Google Play Store or Apple App Store 
            and experience the convenience of mobile banking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white hover:bg-gray-800 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Google Play Store</span>
            </button>
            <button className="bg-black text-white hover:bg-gray-800 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Apple App Store</span>
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-trust-900 mb-3">Android</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Android 5.0 and above</li>
                <li>• Minimum 2GB RAM</li>
                <li>• 50MB free space</li>
                <li>• Active internet connection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-trust-900 mb-3">iOS</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• iOS 11.0 and above</li>
                <li>• iPhone 5s or later</li>
                <li>• 100MB free space</li>
                <li>• Active internet connection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileBanking;
