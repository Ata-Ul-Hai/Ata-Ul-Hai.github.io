import { useState, useEffect } from 'react';
import profilePic from '../assets/profile.JPG';

const roles = [
  'Full Stack Engineer',
  'CS Undergraduate @ Polaris & BITS',
  'AI & ML Enthusiast',
  'Open-Source Builder',
];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">

        <div className="hero-image fade-up">
          <img
            src={profilePic}
            alt="Ata Ul Hai"
            className="profile-pic"
          />
        </div>

        <p className="hero-eyebrow fade-up fade-up--delay-1">Hello, I'm</p>

        <h1 className="hero-name fade-up fade-up--delay-2">Ata Ul Hai</h1>

        <p className="hero-tagline fade-up fade-up--delay-3">
          {displayText}
          <span className="cursor-blink" aria-hidden="true" />
        </p>

        <div className="hero-actions fade-up fade-up--delay-4">
          <a href="#projects" className="btn-primary">
            View Work ↓
          </a>
        </div>

      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}

export default Hero;
