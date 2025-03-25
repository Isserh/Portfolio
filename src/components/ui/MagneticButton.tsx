import React, { useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    const maxDistance = Math.sqrt(
      Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
    );

    const x = useSpring(
      useTransform(distance, [0, maxDistance], [0, (e.clientX - centerX) * 0.3]),
      { damping: 15, stiffness: 150 }
    );
    const y = useSpring(
      useTransform(distance, [0, maxDistance], [0, (e.clientY - centerY) * 0.3]),
      { damping: 15, stiffness: 150 }
    );

    return { x, y };
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    const x = useSpring(0, { damping: 15, stiffness: 150 });
    const y = useSpring(0, { damping: 15, stiffness: 150 });
    return { x, y };
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: 0,
        y: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton; 