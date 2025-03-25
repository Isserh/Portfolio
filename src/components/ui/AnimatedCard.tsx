import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      className={`card p-6 hover-lift ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}; 