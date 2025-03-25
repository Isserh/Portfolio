import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.h2
        className="section-title gradient-text animate-gradient"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {children}
      </motion.h2>
    </motion.div>
  );
}; 