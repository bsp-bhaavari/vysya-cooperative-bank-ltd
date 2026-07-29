import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb';
import ServicesOverview from './ServicesOverview';
import RTGSNEFT from './RTGSNEFT';
import Lockers from './Lockers';
import SMSAlerts from './SMSAlerts';
import MobileBanking from './MobileBanking';
import ATMCard from './ATMCard';
import IMPS from './IMPS';
import UPI from './UPI';
import EmailStatement from './EmailStatement';
import DemandDraft from './DemandDraft';
import QRCode from './QRCode';

const ServicesLayout = () => {
  const sidebarItems = [
    {
      name: 'All Services',
      path: '/services',
    },
    {
      name: 'RTGS/NEFT',
      path: '/services/rtgs-neft',
    },
    {
      name: 'Lockers',
      path: '/services/lockers',
    },
    {
      name: 'SMS Alerts',
      path: '/services/sms-alerts',
    },
    {
      name: 'Mobile Banking',
      path: '/services/mobile-banking',
    },
    {
      name: 'ATM Card',
      path: '/services/atm-card',
    },
    {
      name: 'IMPS',
      path: '/services/imps',
    },
    {
      name: 'UPI',
      path: '/services/upi',
    },
    {
      name: 'Email Statement',
      path: '/services/email-statement',
    },
    {
      name: 'Demand Draft',
      path: '/services/demand-draft',
    },
    {
      name: 'QR Code',
      path: '/services/qr-code',
    },
  ];

  return (
    <div className="pt-16">
      <Breadcrumb />
      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar items={sidebarItems} title="Our Services" />
            <div className="page-content-panel flex-grow min-h-[400px] p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<ServicesOverview />} />
                <Route path="/rtgs-neft" element={<RTGSNEFT />} />
                <Route path="/lockers" element={<Lockers />} />
                <Route path="/sms-alerts" element={<SMSAlerts />} />
                <Route path="/mobile-banking" element={<MobileBanking />} />
                <Route path="/atm-card" element={<ATMCard />} />
                <Route path="/imps" element={<IMPS />} />
                <Route path="/upi" element={<UPI />} />
                <Route path="/email-statement" element={<EmailStatement />} />
                <Route path="/demand-draft" element={<DemandDraft />} />
                <Route path="/qr-code" element={<QRCode />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
