import React from 'react';
import { motion } from 'framer-motion';
import { SkillType, skillsData } from '../data/skills';
import MagneticButton from './ui/MagneticButton';
import AnimatedText from './ui/AnimatedText';
import { BackgroundBeams } from './ui/BackgroundBeams';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <BackgroundBeams />
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText
              text="Mes Compétences"
              className="text-4xl font-bold mb-4 gradient-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            >
              Découvrez mes compétences techniques et mes domaines d'expertise
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((item: SkillType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-black">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-8 h-8"
                    />
                    <h3 className="text-2xl font-semibold">{item.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <MagneticButton key={i}>
                        <button className="px-3 py-1.5 rounded-lg bg-violet-500/5 text-violet-500 hover:bg-violet-500/10 transition-colors">
                          {skill}
                        </button>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 