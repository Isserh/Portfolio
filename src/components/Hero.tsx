import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { AnimatedText } from "./ui/AnimatedText";
import AnimatedButton from "./ui/AnimatedButton";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-accent font-semibold">👋 Bonjour, je suis</span>
            </motion.div>
            
            <AnimatedText
              text="John Doe"
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            />
            
            <AnimatedText
              text="Développeur Web Full Stack"
              className="text-2xl md:text-3xl text-secondary mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-secondary mb-8 max-w-lg mx-auto md:mx-0"
            >
              Je crée des expériences web modernes et performantes avec des technologies de pointe.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <AnimatedButton variant="primary">
                Voir mes projets
              </AnimatedButton>
              <AnimatedButton variant="outline">
                Me contacter
              </AnimatedButton>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile.jpg"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 