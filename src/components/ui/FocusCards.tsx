import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  card: {
    label: string;
    src: string;
    skills: string[];
  };
  index: number;
  hovered: number | null;
  setHovered: (index: number | null) => void;
}

const Card = React.memo(({ card, index, hovered, setHovered }: CardProps) => {
  return (
    <div
      className={cn(
        "relative group",
        hovered !== null && hovered !== index && "opacity-90",
        "transition-all duration-150 ease-out"
      )}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{ willChange: "opacity" }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={card.src}
            alt={card.label}
            className="w-full h-full object-cover transition-transform duration-150"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold mb-2">{card.label}</h3>
            <div className="flex flex-wrap gap-2">
              {card.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

interface FocusCardsProps {
  cards: {
    label: string;
    src: string;
    skills: string[];
  }[];
}

export default function FocusCards({ cards }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
} 