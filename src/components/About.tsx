import React from 'react';
import { motion } from 'framer-motion';
import { CardStack } from './ui/CardStack';

interface Skill {
  name: string;
  level: number;
}

interface Education {
  title: string;
  school: string;
  year: string;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'PHP', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 60 },
    { name: 'React', level: 20 },
    { name: 'Node.js', level: 20 },
  ];

  const education: Education[] = [
    {
      title: 'Technicien spécialisé en développement web',
      school: 'l\'Ecole Française d\'Enseignement Technique (EFET)',
      year: '2025'
    },
    {
      title: 'DUT Réseaux et télécommunications',
      school: 'Université de Bourgogne',
      year: '2013'
    }
  ];

  const cards = [
    {
      id: 1,
      name: "John Doe",
      designation: "Développeur Web Full Stack",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/20 shadow-neon mb-4">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-accent">Développeur Web Full Stack</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: "Compétences",
      designation: "Expert en développement web",
      content: (
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="relative">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-primary">{skill.name}</span>
                <span className="text-sm font-medium text-accent">{skill.level}%</span>
              </div>
              <div className="h-2 bg-accent/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="background-pattern" />
      <div className="container relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text animate-gradient">À propos de moi</h2>
          <p className="section-subtitle">
            Découvrez mon parcours et mes compétences en développement web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Colonne de gauche - Stack de cartes */}
          <div className="relative h-[600px]">
            <CardStack items={cards} offset={10} scaleFactor={0.06} />
          </div>

          {/* Colonne de droite - Contenu */}
          <div className="space-y-8">
            {/* À propos */}
            <motion.div 
              className="card p-8 hover-lift"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Qui suis-je ?</h3>
              <p className="text-secondary mb-4">
                Je suis un développeur web passionné fraichement diplômé avec 2 ans d'expérience dans la création
                d'applications web modernes et performantes. Mon approche combine créativité et
                expertise technique pour livrer des solutions innovantes.
              </p>
              <p className="text-secondary">
                Je suis constamment à la recherche de nouveaux défis et opportunités d'apprentissage
                pour rester à la pointe des dernières technologies web.
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div 
              className="card p-8 hover-lift"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                <span className="skill-badge">HTML5</span>
                <span className="skill-badge">CSS3</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">PHP</span>
                <span className="skill-badge">SQL</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Express</span>
                <span className="skill-badge">MongoDB</span>
                <span className="skill-badge">Git</span>
                <span className="skill-badge">Tailwind CSS</span>
              </div>
            </motion.div>

            {/* Formation */}
            <motion.div 
              className="card p-8 hover-lift"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Formation</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{edu.title}</h4>
                      <p className="text-secondary">{edu.school}</p>
                      <p className="text-sm text-secondary">{edu.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 