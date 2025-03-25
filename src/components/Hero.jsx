const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bonjour, je suis <span className="gradient-text">Serhani Issam</span>
            </h1>
            <p className="text-xl text-secondary mb-8">
              Développeur web full stack passionné par la création d'expériences numériques pratiques etexceptionnelles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn btn-primary hover-glow">
                Me contacter
              </a>
              <a href="#projects" className="btn btn-outline hover-glow">
                Voir mes projets
              </a>
            </div>

            {/* Statistiques */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-secondary">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-secondary">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">30+</div>
                <div className="text-secondary">Clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src='/test.png'
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 