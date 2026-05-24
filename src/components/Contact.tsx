const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'r.nas9329@gmail.com',
    href: 'mailto:r.nas9329@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/rinat-nasibullin-b35287218',
    href: 'https://www.linkedin.com/in/rinat-nasibullin-b35287218',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/nilubisan',
    href: 'https://github.com/nilubisan',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact__inner">
          <span className="section-tag">Let's connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p className="contact__text">
            I'm currently open to new opportunities. Whether you have a project in mind, a
            question, or just want to say hi — my inbox is always open!
          </p>
          <div className="contact__list">
            {contactItems.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact__item"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__item__icon">{icon}</span>
                <div>
                  <div className="contact__item__label">{label}</div>
                  <div className="contact__item__value">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
