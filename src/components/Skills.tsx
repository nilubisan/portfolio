const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vite', 'Linux', 'CI/CD', 'Nginx'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-tag">What I work with</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider" />
        <div className="skills__groups">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="skills__group">
              <h3>{category}</h3>
              <div className="skills__tags">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
