import { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ata Ul Hai Signature">
            <path d="M20 70C25 50 35 30 50 20C65 10 80 20 75 40C70 60 50 80 30 75C10 70 15 50 25 40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M45 45L65 65M65 45L45 65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>

        <nav>
          <ul className={`nav-list${menuOpen ? ' open' : ''}`}>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
