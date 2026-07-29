import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import bankLogo from '../assets/bank-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  const navItems = [
    {
      name: 'About Us',
      path: '/about/history',
      subItems: [
        { name: 'History', path: '/about/history' },
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: 'Board of Directors', path: '/about/board-of-directors' },
        { name: 'Previous Board Members', path: '/about/previous-board' },
        { name: 'Branches', path: '/about/branches' },
        { name: 'Awards & Gallery', path: '/about/gallery' }
      ]
    },
    {
      name: 'Banking',
      path: '/banking/accounts',
      subItems: [
        { 
          name: 'Accounts & Deposits', 
          path: '/banking/accounts',
          subItems: [
            { name: 'Savings Account', path: '/banking/accounts/savings' },
            { name: 'Current Account', path: '/banking/accounts/current' },
            { name: 'Term Deposit', path: '/banking/accounts/term-deposit' },
            { name: 'Fixed Deposit', path: '/banking/accounts/fixed-deposit' },
            { name: 'Lakshmi Deposit', path: '/banking/accounts/lakshmi-deposit' },
            { name: 'Kannika Deposit', path: '/banking/accounts/kannika-deposit' },
            { name: 'Pigmy Deposit', path: '/banking/accounts/pigmy-deposit' }
          ]
        },
        { 
          name: 'Loans', 
          path: '/banking/loans',
          subItems: [
            { name: 'Joint Loan', path: '/banking/loans/joint-loan' },
            { name: 'Installment Loan', path: '/banking/loans/installment-loan' },
            { name: 'Vasavi Installment Loan', path: '/banking/loans/vasavi-installment-loan' },
            { name: 'Kannika Installment Loan', path: '/banking/loans/kannika-installment-loan' },
            { name: 'Vehicle Loan', path: '/banking/loans/vehicle-loan' },
            { name: 'Vasavi Vehicle Loan', path: '/banking/loans/vasavi-vehicle-loan' },
            { name: 'NSC Loan', path: '/banking/loans/nscl-loan' },
            { name: 'LIC Policy Loan', path: '/banking/loans/lic-policy-loan' },
            { name: 'General Housing Loan', path: '/banking/loans/housing-loan' },
            { name: 'Kannika Housing Loan', path: '/banking/loans/kannika-housing-loan' },
            { name: 'Vasavi Housing Loan', path: '/banking/loans/vasavi-housing-loan' },
            { name: 'Machinery Loan', path: '/banking/loans/machinery-loan' },
            { name: 'Gold Loan', path: '/banking/loans/gold-loan' },
            { name: 'Sri Lakshmi Cash Credit', path: '/banking/loans/sri-lakshmi-cash-credit' },
            { name: 'Godown Loan', path: '/banking/loans/godown-loan' },
            { name: 'Warehouse Loan', path: '/banking/loans/warehouse-loan' },
            { name: 'Cash Credit', path: '/banking/loans/cash-credit' },
            { name: 'Vasavi Cash Credit', path: '/banking/loans/vasavi-cash-credit' },
            { name: 'Deposit Loan', path: '/banking/loans/deposit-loan' },
            { name: 'Vasavambha Term Loan', path: '/banking/loans/vasavambha-term-loan' },
            { name: 'Vasavambha Cash Credit', path: '/banking/loans/vasavambha-cash-credit' },
            { name: 'Vasavambha Overdraft Loan', path: '/banking/loans/vasavambha-overdraft-loan' }
          ]
        },
        { name: 'Banking Charges', path: '/banking/charges' }
      ]
    },
    {
      name: 'Interest Rates',
      path: '/interest-rates/loans',
      subItems: [
        { name: 'Loan Interest Rates', path: '/interest-rates/loans' },
        { name: 'Deposit Interest Rates', path: '/interest-rates/deposits' }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      subItems: [
        { name: 'RTGS / NEFT', path: '/services/rtgs-neft' },
        { name: 'Lockers', path: '/services/lockers' },
        { name: 'SMS Alerts', path: '/services/sms-alerts' },
        { name: 'Mobile Banking', path: '/services/mobile-banking' },
        { name: 'ATM RuPay Card', path: '/services/atm-card' },
        { name: 'IMPS', path: '/services/imps' },
        { name: 'UPI', path: '/services/upi' },
        { name: 'Email Statement', path: '/services/email-statement' },
        { name: 'Demand Draft', path: '/services/demand-draft' },
        { name: 'QR Code', path: '/services/qr-code' }
      ]
    },
    {
      name: 'Financial Reports',
      path: '/financial-reports',
    },
    {
      name: 'DEAF Accounts',
      path: '/deaf-accounts',
    },
    {
      name: 'Customer Grievance',
      path: '/customer-grievance',
    },
    {
      name: 'Contact Us',
      path: '/contact',
      subItems: [
        { name: 'Contact Details', path: '/contact' },
        { name: 'Email', path: '/contact' },
        { name: 'Branch Locations', path: '/contact' }
      ]
    }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'shadow-lg shadow-black/10'
        : 'shadow-md shadow-black/8'
    }`}
      style={{
        background: scrolled
          ? 'linear-gradient(90deg, #0B1F3A 0%, #132D52 100%)'
          : 'linear-gradient(90deg, #0B1F3A 0%, #132D52 100%)'
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400/60 via-gold-400 to-gold-400/60" />
      <div className="container-max relative">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={bankLogo} alt="Vysya Co-operative Bank Ltd., Tumakuru" className="h-10 w-auto max-w-[min(9rem,28vw)] object-contain shrink-0 drop-shadow-md rounded-sm " />
            <div className="leading-tight hidden sm:block">
              <span className="text-lg font-bold text-white whitespace-nowrap group-hover:text-gold-300 transition-colors duration-200">
                Vysya Co-operative Bank Ltd.,
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4 dropdown-container">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems && item.subItems.length > 0 ? (
                  <button
                    className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                       isActive(item.path)
                         ? 'text-white border-b-2 border-gold-400 pb-1'
                         : 'text-white/80 hover:text-white'
                     }`}
                    onClick={() => handleDropdownToggle(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 ${isActive(item.path) ? 'text-gold-400' : 'text-white/50'}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                       isActive(item.path)
                         ? 'text-white border-b-2 border-gold-400 pb-1'
                         : 'text-white/80 hover:text-white'
                     }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.subItems && item.subItems.length > 0 && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-premium border border-gray-100 border-t-2 border-t-gold-400 min-w-max z-50 overflow-hidden">
                    <div className="p-4 bg-white">
                      {item.subItems.map((subItem, index) => (
                        <div key={subItem.name}>
                          {subItem.group ? (
                            <div className="mb-4">
                              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 pb-1 border-b border-gray-200">
                                {subItem.group}
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {(subItem.items || []).map((subSubItem) => (
                                  <Link
                                    key={subSubItem.name}
                                    to={subSubItem.path}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-trust-50 hover:text-trust-800 rounded-md transition-colors duration-200"
                                    onClick={closeDropdown}
                                  >
                                    {subSubItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-trust-50 hover:text-trust-800 rounded-md transition-colors duration-200"
                              onClick={closeDropdown}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 border border-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-[#0B1F3A] to-[#132D52] shadow-xl border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems && item.subItems.length > 0 ? (
                    <div>
                      <button
                        type="button"
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg font-medium transition-colors ${
                          isActive(item.path)
                            ? 'text-gold-400 border-l-[3px] border-gold-400 bg-white/5'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 text-white/40" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.subItems.map((subItem) => (
                            <div key={subItem.name}>
                              {subItem.group ? (
                                <div>
                                  <div className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2 pb-1 border-b border-white/10">
                                    {subItem.group}
                                  </div>
                                  <div className="space-y-1">
                                    {subItem.items.map((subSubItem) => (
                                      <Link
                                        key={subSubItem.name}
                                        to={subSubItem.path}
                                        className="block px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subSubItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-gold-400 border-l-[3px] border-gold-400 bg-white/5'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
