import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)',
      }}
      className={cn(
        'relative rounded-xl bg-white dark:bg-black p-6 shadow-lg border border-neutral-200 dark:border-white/[0.1]',
        'hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-500/5',
        'transition-all duration-300 ease-in-out',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: 'translateZ(20px)',
        }}
      />
    </motion.div>
  );
};

export default HoverCard; 