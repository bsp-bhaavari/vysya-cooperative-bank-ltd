import React from 'react';
import Table from '../../components/Table';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Charges = () => {
  const commissionCharges = [
    ['Pay Order / DD Commission - Up to Rs.1 Lakh', '0.15% + GST', 'Per Transaction'],
    ['Pay Order / DD Commission - Above Rs.1 Lakh', '0.1% + GST', 'Per Transaction']
  ];

  const rtgsCharges = [
    ['Up to Rs.1 Lakh', 'Rs.15 + GST = 17.70', 'Per Transaction'],
    ['Rs.1 Lakh to Rs.5 Lakh', 'Rs.30 + GST = 35.40', 'Per Transaction'],
    ['Rs.5 Lakh to Rs.10 Lakh', 'Rs.40 + GST = 47.20', 'Per Transaction'],
    ['Above Rs.10 Lakhs', 'Rs.110 + GST = 129.80', 'Per Transaction'],
    ['GST Payment', 'Rs.50 + GST = 59.00', 'Per Transaction'],
    ['ITD Payment', 'Rs.100 + GST = 118.00', 'Per Transaction']
  ];

  const accountCharges = [
    ['SB A/C Closing Charges', 'Rs.250 + GST = 295.00', 'One Time'],
    ['CA A/C Closing Charges', 'Rs.500 + GST = 590.00', 'One Time'],
    ['Cheque Book - Per Leaf', 'Rs.3.50 + GST = 4.13', 'Per Leaf'],
    ['Cheque Book - SB, CA, CC', 'Rs.3.50 + GST = 4.13', 'Per Leaf'],
    ['Duplicate Pass Book Charges', 'Rs.100 + GST = 118', 'Per Book'],
    ['A/C Pass Sheet - First Time', 'No Charges', 'Free'],
    ['A/C Pass Sheet - Second Time', 'Rs.5 + GST = 5.90', 'Per Sheet']
  ];

  const clearingCharges = [
    ['Clearing O/W & I/W Return Charges', 'Rs.500 including GST', 'Per Cheque'],
    ['Cheque Stop Payment', 'Rs.100 + GST = 118', 'Per Leaf'],
    ['Pay Order Cancellation', 'Rs.100 + GST = 118', 'Per Pay Order']
  ];

  const cashCharges = [
    ['Cash Deposit to Current/Savings account (other business) - Above Rs.5 Lakhs', 'Rs.50 + GST per Lakh = 59', 'Per Lakh'],
    ['Cash deposit up to Rs.5 lakhs to any account per day', 'Exemption of charges', ''],
    ['Cash deposit to accounts for making Term deposits', 'Exemption of charges', ''],
    ['Cash deposit to any loan account', 'Exemption of charges', '']
  ];

  const maintenanceCharges = [
    ['SB A/C - Minimum balance Rs.1000/- Incidental Charges', 'Rs.25 + GST/Per quarter = 29.50', 'Per Quarter'],
    ['Current A/C - Minimum Balance Rs.2000/- Incidental Charges', 'Rs.25 + GST/Per quarter = 29.50', 'Per Quarter'],
    ['KCD Late Fee', 'Rs.15/- for Rs.1000/-', 'Per Occurrence'],
    ['CC Renewals / Gold O.D Renewals', 'Min Rs.2000+GST or 0.05%+GST on Advance Amt whichever is Higher', 'Per Renewal'],
    ['Medical Fund', 'Rs.1000/- (One Time Fee)', 'One Time'],
    ['Medical Pass Book (Duplicate)', 'Rs.100 + GST = 118', 'Per Book'],
    ['Nomination Change Charges', 'Rs.50 + GST = 59', 'Per Change'],
    ['SMS Charges', 'Rs.0.50 + GST per Message sent/per Quarter = 0.59', 'Per Message/Quarter']
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Service Charges</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          VYSYA CO-OPERATIVE BANK LTD., TUMAKURU-572102. Charges w.e.f. 21/05/2025.
          Transparent and competitive pricing for all our banking services.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-surface-tint to-surface-muted/80 border-gray-100">
        <CardHeader>
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                <span className="text-trust-800 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All charges are inclusive/exclusive of GST and other applicable taxes as per government regulations.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                <span className="text-trust-800 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Charges are subject to revision by the bank from time to time with proper notice to customers.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                <span className="text-trust-800 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Above conditions not applicable to Bengaluru Branches for cash remittance charges.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Pay Order / DD Commission</h2>
        <Table
          headers={['Service', 'Charges', 'Frequency']}
          rows={commissionCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">RTGS Charges</h2>
        <Table
          headers={['Amount', 'Charges', 'Frequency']}
          rows={rtgsCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Account Related Charges</h2>
        <Table
          headers={['Service', 'Charges', 'Frequency']}
          rows={accountCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Clearing & Payment Charges</h2>
        <Table
          headers={['Service', 'Charges', 'Frequency']}
          rows={clearingCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Cash Remittance Charges</h2>
        <Table
          headers={['Service', 'Charges', 'Frequency']}
          rows={cashCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Account Maintenance & Other Charges</h2>
        <Table
          headers={['Service', 'Charges', 'Frequency']}
          rows={maintenanceCharges}
        />
      </div>
    </div>
  );
};

export default Charges;
