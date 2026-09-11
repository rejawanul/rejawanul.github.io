import { portfolioData } from "../data/portfolioData";
import { BookOpen, Award, Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section card">
      <h2 className="section-title">Timeline</h2>
      <p className="section-subtitle">
        A look at how my academic research and entrepreneurial work happen side by side.
      </p>

      <div className="dual-timeline-container">
        {/* Academic & Tech Timeline Column */}
        <div className="timeline-column">
          <div className="timeline-column-header">
            <BookOpen size={20} className="column-icon-header text-accent" />
            <h3>Academic & Technical Path</h3>
          </div>
          
          <div className="timeline-items">
            {experience.academicTech.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <Calendar size={12} className="meta-icon" />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <h5 className="timeline-org">{exp.organization}</h5>
                  <ul className="timeline-details">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative & Business Timeline Column */}
        <div className="timeline-column">
          <div className="timeline-column-header">
            <Briefcase size={20} className="column-icon-header text-creative" />
            <h3>Creative & Entrepreneurial Path</h3>
          </div>

          <div className="timeline-items">
            {experience.creativeBusiness.map((exp, idx) => (
              <div key={idx} className="timeline-item timeline-creative-item">
                <div className="timeline-marker marker-creative"></div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <Calendar size={12} className="meta-icon" />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <h5 className="timeline-org">{exp.organization}</h5>
                  <ul className="timeline-details">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
