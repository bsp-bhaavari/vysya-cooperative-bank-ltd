import React from 'react';
import { Download, FileText } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const FinancialReports = () => {
  const balanceSheets = [
    { year: '2023', label: 'Financial Year', file: '/reports/balance_sheet_2023.pdf' },
    { year: '2024', label: 'Financial Year', file: '/reports/balance_sheet_2024.pdf' },
    { year: '2025', label: 'Financial Year', file: '/reports/balance_sheet_2025.pdf' },
    { year: '2026', label: 'Financial Year', file: '/reports/balance_sheet_2026.pdf' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-trust-900 mb-4">Financial Reports</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access our comprehensive financial reports including balance sheets 
              and regulatory disclosures.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
            <CardHeader>
              <CardTitle>Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust-600 mb-2">48+</div>
                  <p className="text-gray-600">Years of Service</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">1 AO + 8</div>
                  <p className="text-gray-600">Branches Across Tumkur, Bangalore, Mysuru District</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust-600 mb-2">25000+</div>
                  <p className="text-gray-600">Customers Trusting with us</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-trust-900 mb-6">Annual Financial Statements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {balanceSheets.map((bs, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                  <div className="h-1.5 bg-gradient-to-r from-teal-500 to-blue-600" />
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce transition-all">
                      <FileText className="w-8 h-8 text-teal-600" />
                    </div>
                    <span className="text-4xl font-bold text-trust-900">{bs.year}</span>
                    <span className="text-sm text-gray-500 mt-1">{bs.label}</span>
                    <p className="text-base text-gray-700 mt-2 mb-2">Balance Sheet</p>
                    <span className="text-xs text-gray-400 mb-4">Last Updated: Jan {bs.year}</span>
                    <a
                      href={bs.file}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-md border-2 border-amber-500 transition-all duration-300 hover:bg-blue-700 hover:border-amber-400"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                    <span className="mt-2 text-xs text-gray-400">PDF</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-trust-50/50">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">
                    All financial reports are audited by independent auditors and approved by the Board of Directors.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">
                    Reports are prepared in accordance with Indian Accounting Standards (Ind AS) and RBI guidelines.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">
                    For any queries regarding financial reports, please contact our administrative office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinancialReports;
