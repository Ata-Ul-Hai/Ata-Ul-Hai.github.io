import { skillCategories } from '../data/skills';

function TechStack() {
  return (
    <section id="skills" className="section techstack">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group) => (
            <div key={group.category} className="skill-category">
              <p className="skill-category-name">{group.category}</p>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;
