import { education, activities } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-cols">

          {/* Education Column */}
          <div>
            <p className="exp-col-title">Education</p>
            <div className="edu-list">
              {education.map((item) => (
                <div key={item.id} className="edu-card">
                  <p className="edu-period">{item.period}</p>
                  <h3 className="edu-institution">{item.institution}</h3>
                  <p className="edu-subtitle">{item.subtitle}</p>
                  <p className="edu-degree">{item.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Column */}
          <div>
            <p className="exp-col-title">Extracurricular</p>
            <div className="activity-list">
              {activities.map((item, index) => (
                <div key={item.id} className="activity-item">
                  <span className="activity-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="activity-content">
                    <h3 className="activity-title">{item.title}</h3>
                    <p className="activity-org">{item.org}</p>
                    <p className="activity-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
