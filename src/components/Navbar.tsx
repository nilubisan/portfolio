const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          rinat<span>.kz</span>
        </a>
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
