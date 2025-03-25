export interface ProjectType {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projectsData: ProjectType[] = [
  {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2088&auto=format&fit=crop",
    description: "Une plateforme e-commerce moderne avec panier et paiement intégré",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com"
  },
  {
    title: "Application Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "Application web responsive avec authentification",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://github.com"
  },
  {
    title: "Dashboard Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Tableau de bord analytique avec visualisations",
    technologies: ["React", "D3.js", "Firebase"],
    link: "https://github.com"
  }
]; 