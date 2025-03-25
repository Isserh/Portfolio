const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'PHP', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 60 },
    { name: 'React', level: 20 },  
    { name: 'Node.js', level: 20 },
    
  ]

  return (
    <section id="about" className="section-padding">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">
            Découvrez mon parcours et mes compétences en développement web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informations personnelles */}
          <div className="space-y-6">
            <div className="card p-8 hover-lift">
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
            </div>

            {/* Formation */}
            <div className="card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Formation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Technicien spécialisé en développement web</h4>
                  <p className="text-secondary">l’Ecole Française d’Enseignement Technique (EFET) - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">DUT Réseaux et télécommunications</h4>
                  <p className="text-secondary">Université de Bourgogne - 2013</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compétences */}
          <div className="space-y-6">
            <div className="card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Mes Compétences</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-blue-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="card p-8 hover-lift">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 