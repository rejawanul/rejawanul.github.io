import { portfolioData } from "../data/portfolioData";
import { Database, Binary, Video, Settings } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "computer vision & ml research":
        return <Database size={20} className="category-icon" />;
      case "data annotation techniques":
        return <Binary size={20} className="category-icon" />;
      case "video editing & creative":
        return <Video size={20} className="category-icon" />;
      default:
        return <Settings size={20} className="category-icon" />;
    }
  };

  return (
    <section id="skills" className="section card">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">A verified breakdown of competencies grounded in project execution and professional history.</p>

      <div className="skills-grid">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-group-card">
            <div className="skill-group-header">
              {getIcon(skillGroup.category)}
              <h3>{skillGroup.category}</h3>
            </div>
            <div className="skills-badges">
              {skillGroup.items.map((item, itemIdx) => (
                <span key={itemIdx} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
