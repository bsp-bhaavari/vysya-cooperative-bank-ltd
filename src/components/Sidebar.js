import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Sidebar = ({ items, title }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="relative overflow-hidden rounded-2xl shadow-card p-6 sticky top-24 transition-all duration-300 hover:shadow-elevated"
        style={{
          background: 'linear-gradient(180deg, #0B1F3A 0%, #132D52 100%)'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400/60 via-gold-400 to-gold-400/60" />
        <h3 className="relative z-10 text-lg font-semibold text-white mb-1 pb-3 border-b-2 border-white/10">
          {title}
        </h3>
        <nav className="relative z-10 space-y-1 pt-4">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center justify-between px-4 py-2.5 rounded-lg border-l-[3px] transition-all duration-200 text-sm ${
                isActive(item.path)
                  ? 'bg-[#C9A227] text-white font-medium border-[#C9A227]'
                  : 'text-white/60 border-transparent hover:text-white hover:bg-white/5 hover:border-gold-400/40'
              }`}
            >
              <span className="flex items-center space-x-3">
                {item.icon && (
                  <item.icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    isActive(item.path) ? 'text-white' : 'text-white/40 group-hover:text-gold-400'
                  }`} />
                )}
                <span>{item.name}</span>
              </span>
              <ChevronRight className={`w-4 h-4 transition-all duration-200 shrink-0 ${
                isActive(item.path) ? 'rotate-90 text-white' : 'text-white/30 group-hover:text-gold-400 group-hover:translate-x-0.5'
              }`} />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
