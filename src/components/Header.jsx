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
          <span className="logo-bracket">[</span>
          AH
          <span className="logo-bracket">]</span>
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

        <a
          href="/Resume.pdf"
          download
          className="nav-resume-btn"
          aria-label="Download Resume"
        >
          Resume ↓
        </a>

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
