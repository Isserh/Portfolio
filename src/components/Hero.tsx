import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './ui/AnimatedText';
import AnimatedButton from './ui/AnimatedButton';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-60 h-60 rounded-full mx-auto border-8 border-violet-500/20 shadow-lg object-cover object-center"
            />
          </motion.div>

          <AnimatedText
            text="Développeur Full Stack"
            className="text-5xl font-bold mb-6 gradient-text"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto"
          >
            Développeur web full stack passionné par la création d'expériences numériques pratiques modernes et performantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-300 hover:text-violet-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-300 hover:text-violet-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-300 hover:text-violet-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <AnimatedButton variant="primary">Voir mes projets</AnimatedButton>
            <AnimatedButton variant="outline">Me contacter</AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 