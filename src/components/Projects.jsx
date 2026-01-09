/* ===========================================
   PROJECTS COMPONENT
   
   This is DATA-DRIVEN - projects come from a separate file.
   This makes it easy to add/remove projects without touching this code.
   
   KEY CONCEPT: map() function
   - Takes an array and transforms each item
   - Returns a new array of JSX elements (cards)
   =========================================== */

// Import the projects data from our data file
import { projects } from '../data/projects';

/**
 * Projects Component
 * 
 * Uses the .map() method to loop through projects array
 * and create a card for each one.
 */
function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="container">

                <h2 className="section-title">My Projects</h2>

                {/* Grid container for project cards */}
                <div className="projects-grid">

                    {/* 
            .map() loops through each project in the array
            For each project, it returns a card component
            
            KEY: We pass 'project.id' as the 'key' prop.
            React needs this to efficiently update the list.
          */}
                    {projects.map((project) => (

                        // 'article' is semantic HTML for self-contained content
                        <article key={project.id} className="project-card">

                            {/* Project title */}
                            <h3 className="project-title">{project.title}</h3>

                            {/* Project description */}
                            <p className="project-description">{project.description}</p>

                            {/* Tech stack - another .map() to create pills */}
                            <div className="project-tech">
                                {project.techStack.map((tech, index) => (
                                    // Using index as key here is OK since tech list is static
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links to live demo and GitHub */}
                            <div className="project-links">
                                {/* Only show live link if it exists */}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        className="project-link"
                                        target="_blank"           // Opens in new tab
                                        rel="noopener noreferrer" // Security best practice
                                    >
                                        🔗 Live Demo
                                    </a>
                                )}

                                <a
                                    href={project.githubUrl}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📂 GitHub
                                </a>
                            </div>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;
