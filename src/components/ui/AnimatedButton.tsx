import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary'
}) => {
  const baseStyles = "relative px-6 py-3 rounded-lg font-medium overflow-hidden transition-all duration-300";
  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    secondary: "bg-accent/10 text-accent hover:bg-accent/20",
    outline: "border-2 border-accent text-accent hover:bg-accent/10"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 hover:opacity-10 transition-opacity duration-300"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      {children}
    </motion.button>
  );
}; 