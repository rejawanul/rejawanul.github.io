import { portfolioData } from "../data/portfolioData";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = portfolioData;

  return (
    <div className="building-wrap">
      <p className="eyebrow reveal light">On My Workstation</p>
      <h2 className="section-title reveal">Currently Building &amp; Researching</h2>
      <div className="building-grid">
        {currentlyBuilding.map((item) => (
          <div key={item.name} className="timeline-card tilt reveal">
            <div className="timeline-head">
              <h3 className="timeline-role">{item.name}</h3>
              <span className="status-pill">{item.status}</span>
            </div>
            <p className="timeline-desc">{item.description}</p>
            <div className="timeline-tags">
              {item.tech.split(",").map((t) => (
                <span key={t} className="chip">{t.trim()}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
