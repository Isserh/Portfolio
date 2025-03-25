import React from "react";
import { motion } from "framer-motion";
import { HoverCard } from "./ui/HoverCard";
import { AnimatedText } from "./ui/AnimatedText";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce moderne avec panier, paiement et gestion des commandes.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    id: 2,
    title: "Application de Gestion",
    description: "Application web pour la gestion des tâches et des projets d'équipe.",
    image: "/project2.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    description: "Site portfolio personnel avec animations et design moderne.",
    image: "/project3.jpg",
    technologies: ["React", "TypeScript", "Framer Motion"],
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <AnimatedText
            text="Mes Projets"
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary max-w-2xl mx-auto"
          >
            Découvrez mes projets les plus récents et les technologies que j'utilise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoverCard className="h-full">
                <div className="bg-primary/5 rounded-xl overflow-hidden h-full border border-accent/10">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <a
                        href={project.link}
                        className="text-white font-semibold hover:text-accent transition-colors duration-300"
                      >
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 