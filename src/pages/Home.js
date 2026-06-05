import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Home as HomeIcon, 
  Coins, 
  Smartphone, 
  Lock, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  Shield,
  Star,
  Award,
  Truck,
  Percent
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      icon: Lock,
      title: "Locker Facility",
      subtitle: "Secure Your Valuables",
      description: "Keep your valuables safe with our secure locker facilities available in various sizes",
      features: ["High Security", "Multiple Sizes", "Easy Access"],
      color: "primary",
      bgImage: "/images/locker-facility.jpeg",
      imagePosition: "center"
    },
    {
      icon: Shield,
      title: "Secure Banking",
      subtitle: "Your Safety Is Our Priority",
      description: "Bank with confidence using our advanced security measures and fraud protection",
      features: ["256-bit Encryption", "Fraud Protection", "Secure Transactions"],
      color: "secondary",
      bgImage: "/images/secure-banking.jpeg",
      imagePosition: "center"
    },
    {
      icon: Smartphone,
      title: "IMPS Services",
      subtitle: "Instant Money Transfer",
      description: "IMPS stands for Immediate Payment Service",
      features: ["Instant Transfer", "24/7 Available", "Secure & Fast"],
      color: "primary",
      bgImage: "/images/imps-services.png",
      imagePosition: "center"
    },
    {
      icon: Coins,
      title: "Gold Loans",
      subtitle: "Quick Loans Against Gold",
      description: "Get instant loans against your gold ornaments with minimal documentation and competitive rates",
      features: ["Quick Approval", "Low Interest", "Minimal Documentation"],
      color: "secondary",
      bgImage: "/images/gold-loans.jpg",
      imagePosition: "center"
    },
    {
      icon: Truck,
      title: "Vehicle Loans",
      subtitle: "Drive Your Dream Vehicle",
      description: "Affordable vehicle loans with flexible repayment options for new and used vehicles",
      features: ["Quick Approval", "Flexible Terms", "Competitive Rates"],
      color: "primary",
      bgImage: "/images/vehicle-loans.jpeg",
      imagePosition: "center"
    },
    {
      icon: HomeIcon,
      title: "Home Loans",
      subtitle: "Build Your Dream Home",
      description: "Affordable housing loans with flexible repayment options to make your dream home a reality",
      features: ["Low Interest Rates", "Long Tenure", "Quick Processing"],
      color: "secondary",
      bgImage: "/images/home-loans.jpeg",
      imagePosition: "center"
    },
    {
      icon: CreditCard,
      title: "ATM RuPay Card",
      subtitle: "Access Funds 24/7",
      description: "ATM RuPay Card",
      features: ["24/7 Access", "Wide Acceptance", "Secure Transactions"],
      color: "primary",
      bgImage: "/images/atm-rupay-card.png",
      imagePosition: "center"
    }
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
    }, 5000);
    
    const testImage = new Image();
    testImage.onload = () => console.log('Test image loaded successfully');
    testImage.onerror = () => console.error('Test image failed to load');
    testImage.src = `${process.env.PUBLIC_URL}/images/locker-facility.jpeg`;
    
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
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}${heroSlides[currentSlide].bgImage}`}
          alt={heroSlides[currentSlide].title}
          className="absolute w-full h-full object-cover object-center"
          loading="eager"
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1E3A5F 0%, #0B1F3A 100%)';
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-tr from-trust-950/85 via-trust-900/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-trust-950/40 to-transparent" aria-hidden />
        
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-white p-6 sm:p-8 md:p-12 flex items-center h-full">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full text-white font-medium shadow-sm">
                  <Star className="w-4 h-4 text-gold-300" />
                  <span className="text-sm">Trusted by 25,000+ Customers</span>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center">
                  {React.createElement(heroSlides[currentSlide].icon, { className: "w-8 h-8 text-white" })}
                </div>
                
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
                    {heroSlides[currentSlide].subtitle}
                  </h2>
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                  {heroSlides[currentSlide].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                      <Award className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <span className="text-white text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-trust-600 text-white font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    to="/banking/accounts"
                    className="px-6 py-3 bg-white/12 backdrop-blur-md border border-white/35 text-white font-semibold rounded-lg hover:bg-white/22 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
              <p className="text-white/90 text-lg">Years of Service</p>
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
