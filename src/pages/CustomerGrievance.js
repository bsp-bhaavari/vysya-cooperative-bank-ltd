import React from 'react';

const CustomerGrievance = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12 px-4 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-trust-900 mb-4">Customer Grievance</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Customer Grievance Form
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(11,31,58,0.08)] overflow-hidden p-2 md:p-4">
            <img
              src="/images/customer-grievance-form.jpg"
              alt="Customer Grievance Form"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(11,31,58,0.08)] overflow-hidden p-2 md:p-4">
            <img
              src="/assets/customer-grievance-photo-2.jpg"
              alt="Customer Grievance Form - Additional Details"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrievance;
