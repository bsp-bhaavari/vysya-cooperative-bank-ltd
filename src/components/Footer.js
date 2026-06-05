import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import bankLogo from '../assets/bank-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about/history' },
    { name: 'Banking Services', path: '/banking/accounts/savings' },
    { name: 'Interest Rates', path: '/interest-rates/loans' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'RTGS/NEFT', path: '/services/rtgs-neft' },
    { name: 'Lockers', path: '/services/lockers' },
    { name: 'Mobile Banking', path: '/services/mobile-banking' },
    { name: 'ATM Cards', path: '/services/atm-card' },
    { name: 'UPI Services', path: '/services/upi' },
    { name: 'SMS Alerts', path: '/services/sms-alerts' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-trust-950 via-trust-900 to-trust-950 text-white overflow-hidden border-t-4 border-gold-400">
      <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={bankLogo} alt="Vysya Co-operative Bank Ltd, Tumakuru" className="h-10 w-auto max-w-[9rem] object-contain shrink-0" />
                <div className="leading-tight">
                  <span className="text-xl font-bold whitespace-nowrap text-white">
                    Vysya Cooperative Bank Ltd
                  </span>
                </div>
              </div>
              <p className="text-trust-200/80 text-sm leading-relaxed">
                Your trusted financial partner committed to providing secure and innovative banking solutions for our community.
              </p>

            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-trust-400/50 pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2 mt-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-trust-200/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-trust-400/50 pb-2 inline-block">
                Our Services
              </h3>
              <ul className="space-y-2 mt-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-trust-200/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-trust-400/50 pb-2 inline-block">
                Contact Info
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-trust-200/80 text-sm">0816-2279934</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <a href="mailto:info@vcbltkr.bank.in" className="text-trust-200/80 text-sm hover:text-gold-300 transition-colors duration-200">info@vcbltkr.bank.in</a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                  <span className="text-trust-200/80 text-sm">
                    VYSYA CO-OPERATIVE BANK LTD.<br />
                    Administrative Office, 2nd Floor<br />
                    Dr. Sri Sri Shivakumara Swamiji Circle<br />
                    BH Road, Tumkur - 572102
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-trust-800/60">
        <div className="container-max py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-trust-300/70">
            <p>&copy; 2024 Vysya Cooperative Bank Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
