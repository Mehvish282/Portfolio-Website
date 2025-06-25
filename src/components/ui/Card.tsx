import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-dark-100 shadow-dark border border-dark-200/20',
    glass: 'bg-dark-100/10 backdrop-blur-md border border-dark-200/20 shadow-glass',
    elevated: 'bg-dark-100 shadow-3d border border-dark-200/20',
  };

  const hoverClasses = hover 
    ? 'hover:shadow-glow-lg hover:-translate-y-2 hover:scale-105' 
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};