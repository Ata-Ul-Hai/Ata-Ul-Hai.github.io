import githubIcon from '../assets/github-dark.svg';
import linkedinIcon from '../assets/InBug-Black.png';
// import gmailIcon from '../assets/gmail.png';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-inner">

          <h2 className="contact-heading">
            Let's build something<br />
            <em>worth talking about.</em>
          </h2>

          <p className="contact-text">
            Open to backend engineering roles, interesting projects, and conversations
            about distributed systems, AI pipelines, or Open Source Contribution.
          </p>

          <div className="contact-links">
            <a
              href="mailto:ataulhai2007@gmail.com"
              className="contact-email-cta"
              id="contact-email"
            >
              Say Hello →
            </a>

            <a
              href="https://github.com/Ata-Ul-Hai"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
            >
              <img src={githubIcon} alt="" className="contact-link-icon" style={{ filter: 'invert(1)' }} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ataulhai/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
            >
              <img src={linkedinIcon} alt="" className="contact-link-icon" style={{ filter: 'invert(1)' }} />
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
