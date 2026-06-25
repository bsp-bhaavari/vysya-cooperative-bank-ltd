import React from 'react';
import { Download } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../components/Card';

const CustomerGrievance = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-trust-900 mb-4">Customer Grievance</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Download Customer Grievance Form
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="text-center border-t-4 border-t-gold-400">
              <CardHeader>
                <CardTitle>Customer Grievance Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Please download the grievance form, fill it out, and submit it to your nearest branch.
                </p>
                <a
                  href="/reports/Customer-Grievance-form.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-trust-600 text-white font-bold py-3 px-6 rounded-xl border-2 border-gold-400 shadow-lg shadow-trust-900/20 transition-all duration-300 hover:bg-trust-700 hover:border-gold-500 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Form</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrievance;
