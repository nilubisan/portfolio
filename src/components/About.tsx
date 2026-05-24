export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <span className="section-tag">About me</span>
            <h2 className="section-title">A developer who loves clean code</h2>
            <div className="section-divider" />
            <p>
              I'm Rinat, a full stack developer based in Kazakhstan, with a passion for
              building web applications that are both functional and beautiful.
            </p>
            <p>
              With experience in modern JavaScript frameworks and backend technologies,
              I enjoy taking on challenging projects and continuously learning new skills.
            </p>
            <p>
              Feel free to reach out — I'm always open to interesting collaborations and
              new opportunities.
            </p>
          </div>
          <div className="about__image">
            <div className="about__photo-wrap">
              <img
                src="/photo.jpg"
                alt="Rinat"
                className="about__photo"
                onError={(e) => {
                  const el = e.currentTarget
                  el.parentElement!.style.display = 'none'
                  const fallback = el.parentElement!.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
            </div>
            <div className="about__avatar" style={{ display: 'none' }}>
              👨‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
