import { Star, Award, CheckCircle, Clock, Globe } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function CreativeBusiness() {
  const { businessStats } = portfolioData;

  const cardsInfo = [
    {
      title: "Fiverr Success",
      icon: <Star size={24} className="stat-card-icon" />,
      metric: "100+ Orders",
      subtitle: "148 Reviews | 4.9 Rating",
      description: "Delivering high-speed cinematic sports edits for NBA, NFL, UFC, and Soccer creators worldwide. Standardized 1-hour client feedback cycles."
    },
    {
      title: "Upwork Top Rated",
      icon: <Award size={24} className="stat-card-icon" />,
      metric: "42 Completed Jobs",
      subtitle: "100% Success | Top Rated",
      description: "Managing long-term sports agency production pipelines. Successfully maintaining 11 ongoing retainer contracts with global sports channels."
    },
    {
      title: "Content Verticals",
      icon: <Globe size={24} className="stat-card-icon" />,
      metric: "Global Reach",
      subtitle: "US & International Clients",
      description: "Specializing in sports highlights, talking-head layouts, documentary narratives, and fast-paced cinematic shorts designed to maximize retention."
    }
  ];

  return (
    <section id="beyond-code" className="section card">
      <h2 className="section-title">Beyond Code — I Build Businesses Too</h2>
      <p className="section-subtitle">
        Running a video editing business has built my skills in operations, client relations, and delivery timelines.
      </p>

      <div className="creative-intro-grid">
        <div className="creative-text">
          <p>
            Editing videos and managing client expectations is more than a side gig—it is where I learned how to run a business. Working with international sports channels requires clear communication, fast turnaround times, and strict attention to detail.
          </p>
          <p>
            I bring this same operational discipline to computer vision dataset annotation. Whether labeling pixel-perfect boundaries for medical images or syncing complex timelines for sports editors, my goal is always to deliver clean, accurate work on schedule.
          </p>
        </div>

        <div className="business-badges">
          <div className="business-badge-item">
            <CheckCircle size={16} className="badge-bullet" />
            <span>Sports Content Specialists (NBA, UFC, NFL, NHL, Soccer)</span>
          </div>
          <div className="business-badge-item">
            <CheckCircle size={16} className="badge-bullet" />
            <span>YouTube Talking-Head & Docu-style Layouts</span>
          </div>
          <div className="business-badge-item">
            <CheckCircle size={16} className="badge-bullet" />
            <span>Short-form Reels & High Retention Optimization</span>
          </div>
          <div className="business-badge-item">
            <CheckCircle size={16} className="badge-bullet" />
            <span>Multi-Editor Team & Workflow Coordination</span>
          </div>
        </div>
      </div>

      <div className="stats-grid-dashboard">
        {cardsInfo.map((card, idx) => (
          <div key={idx} className="dashboard-stat-card">
            <div className="stat-header">
              {card.icon}
              <h3>{card.title}</h3>
            </div>
            <div className="stat-value">{card.metric}</div>
            <div className="stat-subtitle">{card.subtitle}</div>
            <p className="stat-desc">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="portfolio-stats-summary">
        {businessStats.map((stat, idx) => (
          <div key={idx} className="mini-stat-badge">
            <span className="mini-stat-val">{stat.value}</span>
            <span className="mini-stat-lbl">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
