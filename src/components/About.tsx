import React from 'react';
import { motion } from 'framer-motion';
import HoverCard from './ui/HoverCard';
import AnimatedText from './ui/AnimatedText';
import { BackgroundBeams } from './ui/BackgroundBeams';

const About: React.FC = () => {
  const formations = [
    {
      année: "2025",
      diplôme: "Technicien spécialisé en développement web",
      école: "Ecole Française d’Enseignement Technique (EFET)",
      description: "Spécialisation en développement full-stack et applications web modernes"
    },
    {
      année: "2013",
      diplôme: "DUT Réseaux et télécommunications",
      école: "Université de Bourgogne",
      description: "Formation en infrastructure réseaux et télécommunications"
    }
  ];

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'PHP', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 60 },
    { name: 'React', level: 20 },
    { name: 'Node.js', level: 20 },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <BackgroundBeams />
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText
              text="À Propos de Moi"
              className="text-4xl font-bold mb-4 gradient-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            >
              Découvrez mon parcours professionnel et mes compétences
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HoverCard>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Description</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                  Je suis un développeur web passionné fraichement diplômé avec 2 ans d'expérience 
                  dans la création d'applications web modernes et performantes. 
                  Mon approche combine créativité et expertise technique pour livrer des solutions innovantes.
                  </p>
                </div>
              </HoverCard>
            </motion.div>

            {/* Formations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HoverCard>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Formations</h3>
                  <div className="space-y-4">
                    {formations.map((formation, index) => (
                      <div key={index} className="border-l-2 border-violet-500 pl-4">
                        <div className="text-sm text-violet-500 mb-1">{formation.année}</div>
                        <h4 className="font-semibold">{formation.diplôme}</h4>
                        <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                          {formation.école}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">
                          {formation.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCard>
            </motion.div>

            {/* Compétences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              <HoverCard>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Compétences</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-neutral-600 dark:text-neutral-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-violet-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 