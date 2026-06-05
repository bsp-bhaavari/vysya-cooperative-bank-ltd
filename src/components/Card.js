import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'p-6',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl border border-gray-100 transition-all duration-300';
  const shadowClass = 'shadow-[0_10px_30px_rgba(11,31,58,0.08)]';
  const hoverClasses = hover ? 'hover:shadow-[0_20px_50px_rgba(11,31,58,0.12)] hover:-translate-y-1' : '';
  
  return (
    <div 
      className={`${baseClasses} ${shadowClass} ${hoverClasses} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold tracking-tight text-trust-900 ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-secondary mt-2 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

export default Card;
