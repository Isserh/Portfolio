import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface CardStackProps {
  items: Array<{
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
  }>;
  offset?: number;
  scaleFactor?: number;
}

export const CardStack: React.FC<CardStackProps> = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <div className="relative h-full w-full">
      {items.map((item, index) => {
        const isTop = index === items.length - 1;
        const zIndex = items.length - index;
        const scale = 1 - index * scaleFactor;
        const yOffset = -index * offset;

        return (
          <motion.div
            key={item.id}
            className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
            style={{
              zIndex,
              scale,
              y: yOffset,
              rotateX: springRotateX,
              rotateY: springRotateY,
            }}
            onMouseMove={(e) => {
              if (!isTop) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              x.set(e.clientX - centerX);
              y.set(e.clientY - centerY);
            }}
            onMouseLeave={() => {
              if (!isTop) return;
              x.set(0);
              y.set(0);
            }}
          >
            <div className="h-full">
              {item.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}; 