import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const formatBreadcrumbName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getRouteDisplayName = (pathname, index) => {
    const fullPath = '/' + pathnames.slice(0, index + 1).join('/');
    
    const displayNames = {
      '/about': 'About Us',
      '/about/gallery': 'Awards & Gallery',
      '/banking': 'Banking',
      '/interest-rates': 'Interest Rates',
      '/reports': 'Reports',
      '/services': 'Services',
      '/contact': 'Contact',
      '/board-of-directors': 'Board of Directors',
      '/previous-board': 'Previous Board',
      '/vision-mission': 'Vision & Mission',
      '/term-deposit': 'Term Deposit',
      '/fixed-deposit': 'Fixed Deposit',
      '/recurring-deposit': 'Recurring Deposit',
      '/pigmy-deposit': 'Pigmy Deposit',
      'gold-loan': 'Gold Loan',
      'vehicle-loan': 'Vehicle Loan',
      'housing-loan': 'Housing Loan',
      'installment-loan': 'Installment Loan',
      'machinery-loan': 'Machinery Loan',
      'cash-credit': 'Cash Credit',
      'deposit-loan': 'Deposit Loan',
      'godown-loan': 'Godown Loan',
      'warehouse-loan': 'Warehouse Loan',
      'rtgs-neft': 'RTGS/NEFT',
      'sms-alerts': 'SMS Alerts',
      'mobile-banking': 'Mobile Banking',
      'atm-card': 'ATM Card',
      'email-statement': 'Email Statement',
      'demand-draft': 'Demand Draft',
      'qr-code': 'QR Code',
      'deaf-accounts': 'Deaf Accounts',
    };

    return displayNames[fullPath] || displayNames[pathnames[index]] || formatBreadcrumbName(pathnames[index]);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container-max py-3 px-4">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-1 text-trust-700 hover:text-trust-800 transition-colors duration-200 font-medium"
            >
              <Home className="w-4 h-4 text-trust-600" />
              <span>Home</span>
            </Link>
          </li>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="flex items-center space-x-2">
                <span className="text-gray-300">/</span>
                {isLast ? (
                  <span className="text-trust-900 font-semibold">
                    {getRouteDisplayName(routeTo, index)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-trust-700 transition-colors duration-200"
                  >
                    {getRouteDisplayName(routeTo, index)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
