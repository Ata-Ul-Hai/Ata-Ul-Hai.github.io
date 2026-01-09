/* ===========================================
   CONTACT COMPONENT
   
   Simple contact section with social links.
   Uses black icons by default, colored on hover.
   =========================================== */

// Import icon images from assets folder
// Black versions for default state
import githubBlack from '../assets/github-dark.svg';
import linkedinBlack from '../assets/InBug-Black.png';
// Colored version for Gmail (no black version needed)
import gmailIcon from '../assets/gmail.png';

/**
 * Contact Component
 */
function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="container">

                <h2 className="section-title">Get In Touch</h2>

                <p className="contact-text">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out!
                </p>

                {/* Social Links */}
                <div className="social-links">

                    {/* GitHub Link */}
                    <a
                        href="https://github.com/Ata-Ul-Hai"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={githubBlack} alt="GitHub" className="social-icon" />
                        GitHub
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/ataulhai/"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinBlack} alt="LinkedIn" className="social-icon" />
                        LinkedIn
                    </a>

                    {/* Email Link */}
                    <a
                        href="mailto:ataulhai2007@gmail.com"
                        className="social-link"
                    >
                        <img src={gmailIcon} alt="Email" className="social-icon" />
                        Email
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;
