import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutLayout from './pages/about/AboutLayout';
import BankingLayout from './pages/banking/BankingLayout';
import ServicesLayout from './pages/services/ServicesLayout';
import InterestRatesLayout from './pages/interest-rates/InterestRatesLayout';
import ReportsLayout from './pages/reports/ReportsLayout';
import FinancialReports from './pages/reports/FinancialReports';
import DeafAccounts from './pages/reports/DeafAccounts';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F6F8FC' }}>
        <Navbar />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about/*" element={<AboutLayout />} />
            
            {/* Banking Routes */}
            <Route path="/banking/*" element={<BankingLayout />} />
            
            {/* Services Routes */}
            <Route path="/services/*" element={<ServicesLayout />} />
            
            {/* Interest Rates Routes */}
            <Route path="/interest-rates/*" element={<InterestRatesLayout />} />
            
            {/* Reports Routes */}
            <Route path="/reports/*" element={<ReportsLayout />} />
            
            {/* Direct Report Routes */}
            <Route path="/financial-reports" element={<FinancialReports />} />
            <Route path="/deaf-accounts" element={<DeafAccounts />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
