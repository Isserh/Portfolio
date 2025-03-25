const Projects = () => {
  const projects = [
    {
      title: 'Application E-commerce',
      description: 'Une application e-commerce complète avec panier, paiement et gestion des commandes.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x300',
      link: '#',
      category: 'Web App'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour la visualisation de données en temps réel.',
      technologies: ['React', 'D3.js', 'Firebase'],
      image: 'https://via.placeholder.com/400x300',
      link: '#',
      category: 'Data Visualization'
    },
    {
      title: 'Application de Gestion',
      description: 'Système de gestion de projet avec authentification et gestion des tâches.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      image: 'https://via.placeholder.com/400x300',
      link: '#',
      category: 'Management'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">
            Découvrez mes réalisations et projets personnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    className="w-full p-4 text-white text-center font-medium hover:underline"
                  >
                    Voir le projet →
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 