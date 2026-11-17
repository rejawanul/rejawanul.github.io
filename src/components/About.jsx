import { portfolioData } from "../data/portfolioData";

const pillarIcons = {
  Database: "database",
  Binary: "data_object",
  Cpu: "memory",
  Video: "movie",
  TrendingUp: "trending_up",
};

export default function About() {
  const { personalInfo, whatIDo, projects } = portfolioData;

  const stats = [
    { icon: "label", value: "5+", label: "Years in Data Annotation" },
    { icon: "dataset", value: "100+", label: "Annotation Projects" },
    { icon: "star", value: "4.9", label: "Fiverr Rating · 156 Reviews" },
    { icon: "deployed_code", value: String(projects.length), label: "Projects Featured" },
  ];

  return (
    <div className="about-section" id="about">
      <p className="eyebrow reveal">Get To Know Me</p>
      <h2 className="section-title reveal">About Me</h2>

      <div className="about-grid">
        <div className="about-copy reveal">
          {personalInfo.detailedBio.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <p className="about-current">
            <span className="material-symbols-outlined">location_on</span>
            Based in {personalInfo.location} · Remote-friendly with US/European time zones.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-card tilt reveal">
              <span className="material-symbols-outlined stat-icon">{s.icon}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="eyebrow reveal" style={{ marginTop: 90 }}>What I Do</p>
      <h2 className="section-title reveal">Core Pillars</h2>
      <div className="pillars-grid">
        {whatIDo.map((item) => (
          <div key={item.title} className="skill-category pillar-card tilt reveal">
            <h3>
              <span className="material-symbols-outlined">{pillarIcons[item.icon] || "bolt"}</span>
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
