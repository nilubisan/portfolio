export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-tag">What I've built</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider" />
        <div className="projects__grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="project-card project-card--placeholder">
              <div className="project-card__placeholder-badge">Coming Soon</div>
              <div className="project-card__icon">🚧</div>
              <h3 className="project-card__title">Project {n}</h3>
              <p className="project-card__desc">
                This project will be added soon. Stay tuned!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
