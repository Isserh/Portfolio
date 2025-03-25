import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}; 