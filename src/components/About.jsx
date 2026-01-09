/* ===========================================
   ABOUT COMPONENT
   
   A brief introduction about yourself.
   Keep it honest, simple, and personal.
   3-4 lines is perfect - don't overdo it!
   =========================================== */

/**
 * About Component
 * 
 * Tips for writing your about section:
 * - Be authentic
 * - Mention what you're learning or interested in
 * - Keep it conversational, not formal
 */
function About() {
    return (
        <section id="about" className="section about">
            <div className="container">

                {/* Section title with decorative underline (styled in CSS) */}
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <p className="about-text">
                        I'm a Computer Science undergraduate at Polaris School of Technology,
                        specializing in AI and Machine Learning. I have a strong interest in
                        product development and open-source engineering. Currently, I'm building
                        functional web applications, integrating APIs, and working with JavaScript,
                        Python, and modern web technologies to solve problems through hands-on development.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;
