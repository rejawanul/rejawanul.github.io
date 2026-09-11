import { useState } from "react";
import { ExternalLink, Lightbulb, ShieldAlert, Cpu, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section card">
      <div className="section-header-flex">
        <div>
          <h2 className="section-title">Problems I Solved</h2>
          <p className="section-subtitle">
            Case studies documenting technical application and dataset engineering challenges.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-story-card">
            <div className="project-meta-top">
              <span className="project-category">{project.category}</span>
              {!project.isRealCVWork && (
                <span className="placeholder-tag">Proposed/Concept</span>
              )}
            </div>

            <h3 className="project-story-title">{project.title}</h3>

            <div className="story-flow">
              {/* Problem */}
              <div className="story-step">
                <div className="story-icon-col">
                  <span className="story-marker marker-problem">
                    <ShieldAlert size={14} />
                  </span>
                </div>
                <div className="story-content-col">
                  <h4>The Problem</h4>
                  <p>{project.problem}</p>
                </div>
              </div>

              {/* Idea */}
              <div className="story-step">
                <div className="story-icon-col">
                  <span className="story-marker marker-idea">
                    <Lightbulb size={14} />
                  </span>
                </div>
                <div className="story-content-col">
                  <h4>The Idea</h4>
                  <p>{project.idea}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="story-step">
                <div className="story-icon-col">
                  <span className="story-marker marker-solution">
                    <Cpu size={14} />
                  </span>
                </div>
                <div className="story-content-col">
                  <h4>The Solution</h4>
                  <p>{project.solution}</p>
                </div>
              </div>

              {/* Result */}
              <div className="story-step">
                <div className="story-icon-col">
                  <span className="story-marker marker-result">
                    <CheckCircle size={14} />
                  </span>
                </div>
                <div className="story-content-col">
                  <h4>The Result</h4>
                  <p>{project.result}</p>
                </div>
              </div>
            </div>

            <div className="project-footer">
              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title="View Source on GitHub"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span>Source</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn highlight"
                    title="Launch Live Demo"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
