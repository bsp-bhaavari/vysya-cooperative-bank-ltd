import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Smartphone, 
  CreditCard, 
  Lock, 
  MessageSquare, 
  QrCode,
  Send,
  Wallet,
  Mail,
  FileText
} from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const ServicesOverview = () => {
  const services = [
    {
      title: 'RTGS/NEFT',
      description: 'Secure and instant fund transfer services for high-value transactions',
      icon: Send,
      link: '/services/rtgs-neft',
      features: ['Instant transfer', '24/7 availability', 'Secure transactions'],
      color: 'primary'
    },
    {
      title: 'Lockers',
      description: 'Secure your valuables in our bank lockers with advanced security',
      icon: Lock,
      link: '/services/lockers',
      features: ['Various sizes', 'High security', 'Annual rental'],
      color: 'secondary'
    },
    {
      title: 'SMS Alerts',
      description: 'Get instant SMS notifications for all your account transactions',
      icon: MessageSquare,
      link: '/services/sms-alerts',
      features: ['Real-time alerts', 'Transaction updates', 'Security notifications'],
      color: 'primary'
    },
    {
      title: 'Mobile Banking',
      description: 'Bank on the go with our comprehensive mobile banking app',
      icon: Smartphone,
      link: '/services/mobile-banking',
      features: ['24/7 access', 'Bill payments', 'Fund transfers'],
      color: 'secondary'
    },
    {
      title: 'ATM Card',
      description: 'Access your funds anytime with our secure ATM and debit cards',
      icon: CreditCard,
      link: '/services/atm-card',
      features: ['Cash withdrawal', 'Online shopping', 'Contactless payments'],
      color: 'primary'
    },
    {
      title: 'IMPS',
      description: 'Instant money transfer service available 24/7 through mobile',
      icon: Send,
      link: '/services/imps',
      features: ['Instant transfer', 'Mobile-based', '24/7 service'],
      color: 'secondary'
    },
    {
      title: 'UPI',
      description: 'Unified Payments Interface for seamless digital payments',
      icon: Wallet,
      link: '/services/upi',
      features: ['QR payments', 'Virtual address', 'Instant transfers'],
      color: 'primary'
    },
    {
      title: 'Email Statement',
      description: 'Receive your account statements directly via email',
      icon: Mail,
      link: '/services/email-statement',
      features: ['Eco-friendly', 'Instant delivery', 'Secure access'],
      color: 'secondary'
    },
    {
      title: 'Demand Draft',
      description: 'Secure payment instrument for guaranteed funds transfer',
      icon: FileText,
      link: '/services/demand-draft',
      features: ['Guaranteed payment', 'Nationwide validity', 'Secure instrument'],
      color: 'secondary'
    },
    {
      title: 'QR Code',
      description: 'Quick and easy payments using QR code technology',
      icon: QrCode,
      link: '/services/qr-code',
      features: ['Scan & pay', 'Contactless', 'Instant settlement'],
      color: 'primary'
    }
  ];

  const getServiceIcon = (icon, color) => {
    const iconClass = color === 'primary' ? 'text-trust-600' : 'text-trust-600';
    const bgClass = color === 'primary' ? 'bg-trust-50/50' : 'bg-gold-50/50';
    
    return (
      <div className={`w-16 h-16 ${bgClass} rounded-xl flex items-center justify-center mb-4`}>
        {React.createElement(icon, { className: `w-8 h-8 ${iconClass}` })}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover our comprehensive range of banking services designed to make your banking experience 
          convenient, secure, and efficient. From traditional services to modern digital solutions, 
          we offer everything you need for seamless financial management.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle>Service Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">11+</div>
              <p className="text-gray-600">Digital Services</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">24/7</div>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">100%</div>
              <p className="text-gray-600">Secure</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-600 mb-1">Free</div>
              <p className="text-gray-600">Basic Services</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                {getServiceIcon(service.icon, service.color)}
                <h3 className="text-xl font-semibold text-trust-900 mb-3 group-hover:text-trust-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {(service.features || []).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-trust-600 to-gold-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Need Help with Our Services?</h3>
          <p className="text-trust-200/80 mb-6 max-w-2xl mx-auto">
            Our customer service team is available 24/7 to assist you with any queries about our services. 
            Get personalized guidance and support for all your banking needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-trust-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Contact Support
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-trust-600 font-medium py-3 px-8 rounded-lg transition-all">
              Visit Branch
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesOverview;
