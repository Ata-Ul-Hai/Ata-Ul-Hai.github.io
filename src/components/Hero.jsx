/* ===========================================
   HERO COMPONENT
   
   The first thing visitors see - includes:
   - Profile picture
   - Greeting
   - Your name (big and prominent)
   - A tagline describing what you do
   - A call-to-action button
   =========================================== */

// Import the profile picture from assets folder
import profilePic from '../assets/profile.JPG';

/**
 * Hero Component
 * 
 * This section makes a strong first impression.
 * Keep the tagline short and memorable!
 */
function Hero() {
    return (
        // 'section' is semantic HTML for a standalone section of content
        // 'id' is used for anchor link navigation (clicking "About" scrolls here)
        <section id="hero" className="hero">
            <div className="container hero-content">

                {/* Profile Picture */}
                <div className="hero-image">
                    <img
                        src={profilePic}
                        alt="Ata Ul Hai"
                        className="profile-pic"
                    />
                </div>

                {/* Small greeting above the name */}
                <p className="hero-greeting">Hello, I'm</p>

                {/* Your name - the main focus */}
                <h1 className="hero-name">Ata Ul Hai</h1>

                {/* Brief tagline - what you do or aspire to do */}
                <p className="hero-tagline">
                    CS Undergrad | AI & ML Enthusiast | Web Developer
                </p>

                {/* Call-to-action button */}
                <a href="#projects" className="hero-cta">
                    View My Work
                </a>

            </div>
        </section>
    );
}

export default Hero;
