import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb';
import AccountsOverview from './accounts/AccountsOverview';
import SavingsAccount from './accounts/SavingsAccount';
import CurrentAccount from './accounts/CurrentAccount';
import TermDeposit from './accounts/TermDeposit';
import FixedDeposit from './accounts/FixedDeposit';
import RecurringDeposit from './accounts/RecurringDeposit';
import PigmyDeposit from './accounts/PigmyDeposit';
import LoansOverview from './loans/LoansOverview';
import JointLoan from './loans/JointLoan';
import InstallmentLoan from './loans/InstallmentLoan';
import VehicleLoan from './loans/VehicleLoan';
import VasaviVehicleLoan from './loans/VasaviVehicleLoan';
import NsclLoan from './loans/NsclLoan';
import LicPolicyLoan from './loans/LicPolicyLoan';
import HousingLoan from './loans/HousingLoan';
import MachineryLoan from './loans/MachineryLoan';
import GoldLoan from './loans/GoldLoan';
import SriLakshmiCashCredit from './loans/SriLakshmiCashCredit';
import GodownLoan from './loans/GodownLoan';
import WarehouseLoan from './loans/WarehouseLoan';
import CashCredit from './loans/CashCredit';
import VasaviCashCredit from './loans/VasaviCashCredit';
import DepositLoan from './loans/DepositLoan';
import VasavambhaTermLoan from './loans/VasavambhaTermLoan';
import VasavambhaCashCredit from './loans/VasavambhaCashCredit';
import VasavambhaOverdraftLoan from './loans/VasavambhaOverdraftLoan';
import Charges from './Charges';

const BankingLayout = () => {
  const sidebarItems = [
    {
      name: 'Accounts',
      path: '/banking/accounts',
      children: [
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
      children: [
        { name: 'Joint Loan', path: '/banking/loans/joint-loan' },
        { name: 'Installment Loan', path: '/banking/loans/installment-loan' },
        { name: 'Vehicle Loan', path: '/banking/loans/vehicle-loan' },
        { name: 'Vasavi Vehicle Loan', path: '/banking/loans/vasavi-vehicle-loan' },
        { name: 'NSCL Loan', path: '/banking/loans/nscl-loan' },
        { name: 'LIC Policy Loan', path: '/banking/loans/lic-policy-loan' },
        { name: 'General Housing Loan', path: '/banking/loans/housing-loan' },
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
    {
      name: 'Banking Charges',
      path: '/banking/charges'
    }
  ];

  return (
    <div className="pt-16">
      <Breadcrumb />
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar items={sidebarItems} title="Banking Services" />
            <div className="page-content-panel flex-grow min-h-[400px] p-6 lg:p-8">
              <Routes>
                <Route path="" element={<AccountsOverview />} />
                <Route path="accounts" element={<AccountsOverview />} />
                <Route path="accounts/savings" element={<SavingsAccount />} />
                <Route path="accounts/current" element={<CurrentAccount />} />
                <Route path="accounts/term-deposit" element={<TermDeposit />} />
                <Route path="accounts/fixed-deposit" element={<FixedDeposit />} />
                <Route path="accounts/recurring-deposit" element={<RecurringDeposit />} />
                <Route path="accounts/pigmy-deposit" element={<PigmyDeposit />} />
                <Route path="loans" element={<LoansOverview />} />
                <Route path="loans/joint-loan" element={<JointLoan />} />
                <Route path="loans/installment-loan" element={<InstallmentLoan />} />
                <Route path="loans/vehicle-loan" element={<VehicleLoan />} />
                <Route path="loans/vasavi-vehicle-loan" element={<VasaviVehicleLoan />} />
                <Route path="loans/nscl-loan" element={<NsclLoan />} />
                <Route path="loans/lic-policy-loan" element={<LicPolicyLoan />} />
                <Route path="loans/housing-loan" element={<HousingLoan />} />
                <Route path="loans/machinery-loan" element={<MachineryLoan />} />
                <Route path="loans/gold-loan" element={<GoldLoan />} />
                <Route path="loans/sri-lakshmi-cash-credit" element={<SriLakshmiCashCredit />} />
                <Route path="loans/godown-loan" element={<GodownLoan />} />
                <Route path="loans/warehouse-loan" element={<WarehouseLoan />} />
                <Route path="loans/cash-credit" element={<CashCredit />} />
                <Route path="loans/vasavi-cash-credit" element={<VasaviCashCredit />} />
                <Route path="loans/deposit-loan" element={<DepositLoan />} />
                <Route path="loans/vasavambha-term-loan" element={<VasavambhaTermLoan />} />
                <Route path="loans/vasavambha-cash-credit" element={<VasavambhaCashCredit />} />
                <Route path="loans/vasavambha-overdraft-loan" element={<VasavambhaOverdraftLoan />} />
                <Route path="charges" element={<Charges />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingLayout;
