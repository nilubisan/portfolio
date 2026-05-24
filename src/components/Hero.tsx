export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="hero__greeting">Hello, World 👋</span>
          <h1 className="hero__name">Rinat</h1>
          <p className="hero__title">
            Full Stack <span>Developer</span>
          </p>
          <p className="hero__description">
            I build modern, performant web applications with clean code and great user
            experiences. Passionate about turning ideas into reality through technology.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn--outline">
              Get In Touch
            </a>
          </div>
          <div className="hero__socials">
            <a
              href="https://github.com/nilubisan"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/rinat-nasibullin-b35287218"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              LI
            </a>
            <a href="mailto:r.nas9329@gmail.com" title="Email">
              @
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
