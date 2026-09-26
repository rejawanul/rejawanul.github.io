import { useState, useEffect } from "react";
import { Star, GitFork, BookOpen, ExternalLink, RefreshCw } from "lucide-react";

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback curated repositories in case of API rate limits
  const fallbackRepos = [
    {
      name: "cv-annotation-formatter",
      description: "A python utility script to parse computer vision annotations (YOLO/COCO formats) and automate dataset verification statistics.",
      language: "Python",
      stargazers_count: 3,
      forks_count: 0,
      html_url: "https://github.com/rejawanul/cv-annotation-formatter"
    },
    {
      name: "sports-highlight-automator",
      description: "Video scene segmentation helper using OpenCV to spot high-motion clips for NBA & UFC timelines.",
      language: "Python",
      stargazers_count: 2,
      forks_count: 1,
      html_url: "https://github.com/rejawanul/sports-highlight-automator"
    },
    {
      name: "rejawanul.github.io",
      description: "My personal developer + data science portfolio hub featuring a dual timeline and storytelling case studies.",
      language: "JavaScript",
      stargazers_count: 1,
      forks_count: 0,
      html_url: "https://github.com/rejawanul/rejawanul.github.io"
    }
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/rejawanul/repos?sort=updated&per_page=10")
      .then((res) => {
        if (!res.ok) throw new Error("API rate limited or network failure");
        return res.json();
      })
      .then((data) => {
        // Filter out fork repositories and sort by size/stars if needed, take top 4
        const filtered = data
          .filter((repo) => !repo.fork)
          .slice(0, 4);
        setRepos(filtered.length > 0 ? filtered : fallbackRepos);
        setLoading(false);
      })
      .catch(() => {
        setRepos(fallbackRepos);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section card">
      <div className="github-section-header">
        <div className="header-left">
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="github-icon-accent">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <h2 className="section-title-inline">Featured GitHub Activity</h2>
        </div>
        <a
          href="https://github.com/rejawanul"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm github-profile-btn"
        >
          View All on GitHub <ExternalLink size={14} style={{ marginLeft: "4px" }} />
        </a>
      </div>
      <p className="section-subtitle">Dynamically synchronizing active code workspaces and open-source contributions.</p>

      {loading ? (
        <div className="github-loading-state">
          <RefreshCw size={24} className="spinner" />
          <span>Synchronizing with GitHub...</span>
        </div>
      ) : (
        <div className="github-repos-grid">
          {repos.map((repo) => (
            <div key={repo.name} className="github-repo-card">
              <div className="repo-header">
                <BookOpen size={16} className="repo-icon" />
                <a
                  href={repo.name === "RejasStudio" ? "https://www.rejastudio.com" : repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-name-link"
                >
                  {repo.name}
                </a>
              </div>
              <p className="repo-desc">{repo.description || "No description provided."}</p>
              <div className="repo-stats-footer">
                <span className="repo-language">
                  <span className={`lang-dot ${repo.language ? repo.language.toLowerCase() : "default"}`}></span>
                  {repo.language || "Shell"}
                </span>
                <span className="repo-stat-item">
                  <Star size={14} />
                  {repo.stargazers_count}
                </span>
                <span className="repo-stat-item">
                  <GitFork size={14} />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="github-api-fallback-notice">
          <p>
            Showing static offline cache due to high rate requests. View real-time repositories directly at{" "}
            <a href="https://github.com/rejawanul" target="_blank" rel="noopener noreferrer">
              github.com/rejawanul
            </a>.
          </p>
        </div>
      )}
    </section>
  );
}
