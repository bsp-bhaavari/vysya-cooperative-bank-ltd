import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  FileText, 
  Users, 
  TrendingUp, 
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Shield,
  DollarSign
} from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from './Card';

const BankingPageTemplate = ({ 
  type, 
  data, 
  heroImage = null,
  additionalSections = []
}) => {
  const isLoan = type === 'loan';
  const isAccount = type === 'account';

  const renderHeroSection = () => {
    if (!data || !data.name) return null;
    
    return (
      <div className="relative overflow-hidden rounded-xl p-8 mb-8 border border-trust-600/30 shadow-premium-sm"
        style={{
          background: 'linear-gradient(135deg, #0B1F3A 0%, #132D52 50%, #1E40AF 100%)'
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 tracking-tight text-white">{data.name}</h1>
            <p className="text-xl mb-6 text-white/80 leading-relaxed">{data.description || ''}</p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-trust-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-300 shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button type="button" className="border-2 border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Calculate EMI
              </button>
            </div>
          </div>
          {heroImage && (
            <div className="mt-6 md:mt-0 md:ml-8">
              <img src={heroImage} alt={data.name} className="w-64 h-64 object-cover rounded-lg" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderKeyFeatures = () => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-trust-900 mb-6 flex items-center gap-2 border-b-2 border-gold-400 inline-block pb-2">
        <Star className="w-6 h-6 text-trust-600" />
        Key Features & Benefits
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(data.features || []).map((feature, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-[0_10px_30px_rgba(11,31,58,0.06)] hover:shadow-[0_15px_40px_rgba(11,31,58,0.1)] transition-shadow duration-300">
            <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEligibilityCriteria = () => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-trust-900 mb-6 flex items-center gap-2 border-b-2 border-gold-400 inline-block pb-2">
        <Users className="w-6 h-6 text-trust-600" />
        Eligibility Criteria
      </h2>
      <div className="bg-white border-l-4 border-trust-600 p-6 rounded-lg border border-gray-100 shadow-[0_10px_30px_rgba(11,31,58,0.06)]">
        <ul className="space-y-3">
          {(data.eligibility || []).map((criteria, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{criteria}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderRequiredDocuments = () => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-trust-900 mb-6 flex items-center gap-2 border-b-2 border-gold-400 inline-block pb-2">
        <FileText className="w-6 h-6 text-trust-600" />
        Required Documents
      </h2>
      <div className="bg-gray-50/50 border border-gray-100 p-6 rounded-lg shadow-[0_10px_30px_rgba(11,31,58,0.06)]">
        <ul className="space-y-3">
          {(data.documents || []).map((doc, index) => (
            <li key={index} className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-trust-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderInterestDetails = () => {
    if (!data.interestRate && !data.charges) return null;
    
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-trust-900 mb-6 flex items-center gap-2 border-b-2 border-gold-400 inline-block pb-2">
          <DollarSign className="w-6 h-6 text-trust-600" />
          {isLoan ? 'Interest Rates & Charges' : isAccount ? 'Interest Details' : 'Service Charges'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.interestRate && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-trust-600" />
                  Interest Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-trust-800">{data.interestRate}</p>
                {data.maxAmount && (
                  <p className="text-gray-600 mt-2">Maximum Amount: <span className="font-semibold">{data.maxAmount}</span></p>
                )}
                {data.maxTenure && (
                  <p className="text-gray-600">Maximum Tenure: <span className="font-semibold">{data.maxTenure}</span></p>
                )}
              </CardContent>
            </Card>
          )}
          
          {data.charges && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-trust-600" />
                  Service Charges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(data.charges || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  };

  const renderRepaymentDetails = () => {
    if (!isLoan || !data.maxTenure) return null;
    
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-trust-900 mb-6 flex items-center gap-2 border-b-2 border-gold-400 inline-block pb-2">
          <Calendar className="w-6 h-6 text-trust-600" />
          Repayment Details
        </h2>
        <div className="bg-white border-l-4 border-gold-400 p-6 rounded-lg border border-gray-100 shadow-[0_10px_30px_rgba(11,31,58,0.06)]">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 mb-2">Maximum Amount</p>
              <p className="text-2xl font-bold text-trust-800">{data.maxAmount}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Maximum Tenure</p>
              <p className="text-2xl font-bold text-trust-800">{data.maxTenure}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Processing Time</p>
              <p className="text-2xl font-bold text-trust-800">2-5 Days</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFAQ = () => {
    if (!isLoan) return null;
    
    const faqs = [
      {
        question: `What is the minimum loan amount for ${data.name}?`,
        answer: `The minimum loan amount varies based on the loan type and your eligibility. Please contact our loan officers for specific details.`
      },
      {
        question: `Can I prepay my ${data.name}?`,
        answer: `Yes, prepayment is allowed. However, prepayment charges may apply as per the loan agreement terms.`
      },
      {
        question: `How long does it take to get ${data.name} approval?`,
        answer: `Typically, loan approval takes 2-5 working days after submission of complete documentation.`
      },
      {
        question: `What security is required for ${data.name}?`,
        answer: `Security requirements vary based on loan amount and type. This may include collateral, guarantor, or other security arrangements.`
      }
    ];

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-trust-900 mb-6 flex items-center gap-2 border-b-2 border-gold-400 inline-block pb-2">
          <Shield className="w-6 h-6 text-trust-600" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {(faqs || []).map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderCTASection = () => (
    <div className="relative overflow-hidden rounded-xl p-8 text-center border border-trust-600/30 shadow-premium-sm"
      style={{
        background: 'linear-gradient(135deg, #0B1F3A 0%, #132D52 50%, #1E40AF 100%)'
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
      <div className="relative">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">Ready to Get Started?</h2>
        <p className="text-xl mb-6 text-white/80">
          Contact us today to learn more about {data.name} and how it can benefit you
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-trust-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-300 shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us
          </Link>
          <button type="button" className="border-2 border-white/60 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Us
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {renderHeroSection()}
      {renderKeyFeatures()}
      {renderEligibilityCriteria()}
      {renderRequiredDocuments()}
      {renderInterestDetails()}
      {renderRepaymentDetails()}
      {renderFAQ()}
      {(additionalSections || []).map((section, index) => (
        <div key={index}>{section}</div>
      ))}
      {renderCTASection()}
    </div>
  );
};

export default BankingPageTemplate;
