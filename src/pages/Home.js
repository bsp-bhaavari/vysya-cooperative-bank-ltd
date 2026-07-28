import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  Percent,
  Download
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { bgImage: "/images/locker-facility.png" },
    { bgImage: "/images/secure-banking.png" },
    { bgImage: "/images/imps-services.png" },
    { bgImage: "/images/gold-loans.png" },
    { bgImage: "/images/vehicle-loans.png" },
    { bgImage: "/images/home-loans.png" },
    { bgImage: "/images/atm-rupay-card.png" }
  ];

  const homeLoanRates = [
    {
      title: "Vasavamba Housing Loan",
      rate: "8.00%",
      maxAmount: "Rs.70 Lacs",
      maxTenure: "240 Months",
      description: "Up to Rs.35 Lacs",
      gradient: "from-trust-500 to-trust-700"
    },
    {
      title: "Vasavamba Housing Loan",
      rate: "8.50%",
      maxAmount: "Rs.70 Lacs",
      maxTenure: "240 Months",
      description: "Above Rs.35 Lakhs",
      gradient: "from-trust-600 to-gold-500"
    },
    {
      title: "Vasavi Housing Loan",
      rate: "8.25%",
      maxAmount: "Rs.70 Lacs",
      maxTenure: "240 Months",
      description: "Competitive Rates",
      gradient: "from-trust-500 to-trust-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      <section className="relative w-full max-w-[1600px] mx-auto aspect-[16/5] overflow-hidden bg-trust-950">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}${slide.bgImage}`}
            alt=""
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section 
        className="relative py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/about-bank.webp")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-surface-tint/85 to-white/90" />
        <div className="absolute inset-0 bg-subtle-glow pointer-events-none" aria-hidden />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-trust-900 mb-3 tracking-tight border-b-2 border-gold-400 inline-block pb-2">
              About Vysya Co-operative Bank
            </h2>
            <h3 className="text-2xl md:text-3xl text-trust-700 font-light mb-8">
              Trusted Banking for a Better Tomorrow
            </h3>
          </div>
          
          <div className="mb-16 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Vysya Co-operative Bank has been serving communities with excellence and integrity for over four decades. 
              We combine traditional banking values with innovative technology to provide you with the best 
              financial solutions tailored to your needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive range of services includes personal banking, business solutions, loans, 
              and digital banking options. We are committed to making banking accessible, secure, and 
              convenient for all our customers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              With a strong foundation of trust and customer satisfaction, we continue to grow and evolve, 
              always keeping your financial well-being at the heart of everything we do.
            </p>
          </div>

          <div className="mb-8">
            <a
              href={`${process.env.PUBLIC_URL}/reports/general-body-meeting-invitation.pdf`}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-trust-800 text-white rounded-lg hover:bg-trust-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span className="text-sm font-medium">Invitation for General Body Meeting</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-trust-800 via-trust-900 to-trust-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-[0.04] pointer-events-none" aria-hidden style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-trust-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-gold-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight border-b-2 border-gold-400/60 inline-block pb-2">
              Trusted by
              <span className="text-gold-400"> Thousands</span> of Customers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our growing family of satisfied customers who trust us with their financial future
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">48+</div>
              <p className="text-white/90 text-lg">Years of Banking Service</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">1+8</div>
              <p className="text-white/90 text-lg">AO & Branches</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">24/7</div>
              <p className="text-white/90 text-lg">Digital Banking</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">25000+</div>
              <p className="text-white/90 text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-surface-muted/80 to-surface-page">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-trust-900 mb-3 tracking-tight border-b-2 border-gold-400 inline-block pb-2">
              Home Loan
              <span className="text-trust-600"> Interest Rates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your dream home with our affordable housing loans at competitive interest rates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {homeLoanRates.map((loan, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(11,31,58,0.08)] hover:shadow-[0_20px_50px_rgba(11,31,58,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${loan.gradient}`} />
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-trust-50 to-trust-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <Percent className="w-8 h-8 text-trust-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{loan.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{loan.description}</p>
                  <div className="text-5xl font-bold text-trust-600 mb-2">{loan.rate}</div>
                  <p className="text-gray-600 text-sm mb-4">Interest Rate p.a.</p>
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Max Amount</span>
                      <span className="font-semibold text-gray-900">{loan.maxAmount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Max Tenure</span>
                      <span className="font-semibold text-gray-900">{loan.maxTenure}</span>
                    </div>
                  </div>
                  <Link
                    to="/banking/loans/housing-loan"
                    className="mt-6 inline-flex items-center text-trust-600 hover:text-gold-500 font-medium group/link"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/interest-rates/loans"
                className="inline-flex items-center px-8 py-4 bg-trust-600 text-white font-semibold rounded-xl hover:bg-gold-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              View All Loan Rates
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-surface-muted/80 via-surface-page to-surface-tint">
        <div className="container-max">
          <div className="bg-gradient-to-br from-trust-800 via-trust-900 to-trust-950 rounded-3xl p-12 md:p-16 relative overflow-hidden border border-trust-800/40 shadow-elevated">
            <div className="absolute inset-0 bg-gradient-to-t from-trust-950/30 to-transparent" aria-hidden />
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-trust-500/12 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Experience
                <span className="text-gold-400"> Vysya Co-operative Banking?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their banking experience with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-trust-600 text-white font-bold rounded-xl hover:bg-gold-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/about/history"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/35 text-white font-bold rounded-xl hover:bg-white/18 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
