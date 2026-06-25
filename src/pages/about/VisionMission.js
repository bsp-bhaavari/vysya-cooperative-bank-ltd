import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const VisionMission = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Vision & Mission</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vision & Mission Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-700">
            <li>• Customer Satisfaction Is Our Sole Motto</li>
            <li>• Customers are the live wire of Banking and without them banking will not have any Meaning.</li>
            <li>• Let's Join hands together, let's make tomorrow better.</li>
            <li>• Your Trust is our Asset.</li>
            <li>• Do the best for Better Future.</li>
            <li>• Helping to Grow, Growing to Help</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Goals & Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Profit Motive — Profit earning and Wealth maximization is the prime motto.</li>
            <li>Wealth Maximisation — The Net worth is expected to reach ₹100 Crores from present ₹87 Crores.</li>
            <li>Asset & Liability Management — Proper Asset & Liability Management System to invest funds with criteria of Profitability, Liquidity and Security.</li>
            <li>Surplus Cash Management — Average cash and bank balances maintained at about 3.50% on Net Time & Demand Liabilities (only 0.50% more than required CRR).</li>
            <li>Build up Quality Loan Asset Portfolio — Average yield target of 13.00% p.a. Targeting to increase advances from 300+ crores to 400+ crores.</li>
            <li>Increase the Non-Interest Income — Focus on DD, Pay Orders, Safe Deposit Lockers, Bank Guarantee, Letter of Credits etc.</li>
            <li>Reduce the Operating Cost — Aiming to bring operating expenditure down to around 150% of Non-Interest Income.</li>
            <li>Focus on Recovery — Focus on recovery of all Non-Performing Assets (NPA) and overdue accounts.</li>
            <li>To Absorb Technology at a Faster Pace — Providing Core Banking, planning ATM, Mobile Banking & Internet Banking.</li>
            <li>Innovative Services — Fast Cheque Collection, Quick sanction of Pledge (Stock, Warehouse Receipt), Gold, NSC/LIC Loans, Letter of Credits.</li>
            <li>Increase Customer Satisfaction — Customer Convenience Timing, Extended Time Service, Quick Response, Computer Printed Pass Books.</li>
            <li>Focus on Skill Development — Training programs with RBI, Regional Institute of Co-operative Societies, Karnataka State Co-operative Federation, etc.</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Future Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• To build up quality loan asset portfolio</li>
            <li>• To start new branches (expansion)</li>
            <li>• To increase customer satisfaction</li>
            <li>• To provide ATM facilities, Mobile banking, Internet Banking to customers</li>
            <li>• To increase non-interest incomes</li>
            <li>• To optimize cash holdings</li>
            <li>• To increase profitability</li>
            <li>• To decrease operating costs</li>
            <li>• To provide safe lockers facility to customers</li>
            <li>• To offer gold loans for customers</li>
            <li>• To innovate services</li>
            <li>• To absorb operational efficiently</li>
            <li>• To focus on skill development</li>
            <li>• To maintain personal integrity</li>
            <li>• To provide versatile Banking Services</li>
            <li>• To take up other allied banking activities such as General Insurance & Life Insurance</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisionMission;
