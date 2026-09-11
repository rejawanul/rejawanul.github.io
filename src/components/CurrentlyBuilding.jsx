import { portfolioData } from "../data/portfolioData";
import { Hammer, Circle } from "lucide-react";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = portfolioData;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "live":
        return "status-live";
      case "testing":
        return "status-testing";
      case "building":
        return "status-building";
      case "researching":
        return "status-researching";
      default:
        return "status-idea";
    }
  };

  return (
    <section className="section card">
      <div className="building-header">
        <Hammer size={20} className="text-accent" />
        <h2 className="section-title-inline">Currently Building & Researching</h2>
      </div>
      <p className="section-subtitle">Active scripts, experiments, and research areas currently on my workstation.</p>

      <div className="building-grid">
        {currentlyBuilding.map((item, idx) => (
          <div key={idx} className="building-item-card">
            <div className="building-item-header">
              <h3>{item.name}</h3>
              <span className={`status-badge ${getStatusColor(item.status)}`}>
                <Circle size={8} className="status-dot" />
                {item.status}
              </span>
            </div>
            <p className="building-desc">{item.description}</p>
            <div className="building-tech-footer">
              <span className="tech-label">Stack:</span>
              <span className="tech-value">{item.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
