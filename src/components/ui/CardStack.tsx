import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface CardStackProps {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}

const CardStack: React.FC<CardStackProps> = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  let interval: NodeJS.Timeout;

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-[400px] w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-full h-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between bg-white dark:bg-black"
          style={{
            transformOrigin: 'top center',
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="relative h-48 rounded-xl overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <a
                href={card.link}
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              >
                Voir le projet
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {card.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {card.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack; 