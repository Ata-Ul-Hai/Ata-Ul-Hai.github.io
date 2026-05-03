function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">

          <div>
            <p className="section-title">About</p>
          </div>

          <div>
            <p className="about-label">Who I am</p>
            <p className="about-text">
              I'm a Computer Science undergraduate focused on{' '}
              <strong>backend engineering, distributed systems, and AI-driven applications</strong>.
              I build scalable APIs, asynchronous processing pipelines, and protocol-level tools —
              things that live under the surface but power everything on top.
            </p>

            <div className="about-meta">
              <div className="about-meta-item">
                <span className="about-meta-dot" />
                <span>B.Tech CS (AI & ML) — Polaris School of Technology, 2025–2029</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-dot" />
                <span>B.S. CS (Online) — BITS Pilani, 2026–2029</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-dot" />
                <span>Summer of Bitcoin 2026 participant — built Bitcoin protocol tooling</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-dot" />
                <span>Core Organizing Committee — Polaris events including Vibecon & AI Engineers Day</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
