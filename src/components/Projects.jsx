import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { GitHubIcon } from "./Icons";
import CurrentlyBuilding from "./CurrentlyBuilding";

const projectIcons = {
  "kitchen-human-tracker": "restaurant",
  "hand-gesture-recognition": "back_hand",
  "sign-language-recognition": "sign_language",
  "youtube-downloader-mac": "download",
  "money-management-ios": "account_balance_wallet",
  "sell-tracker": "point_of_sale",
  "rejas-studio": "movie",
  "drive-transfer": "cloud_upload",
  "business-management-system": "inventory_2",
  "sample-projects": "widgets",
};

function CodeButton({ href, label = "See the Code", main = false }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={main ? "hype_git_button_main reveal" : "hype_git_button"}>
      <GitHubIcon />
      <span>{label}</span>
    </a>
  );
}

export default function Projects() {
  const { projects, personalInfo } = portfolioData;
  const [openId, setOpenId] = useState(null);
  const [closing, setClosing] = useState(false);
  const current = projects.find((p) => p.id === openId);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenId(null);
      setClosing(false);
    }, 300);
  };

  return (
    <>
      <div className="projects" id="projects">
        <p className="eyebrow reveal light">Problems I Solved</p>
        <div className="pro_title reveal">My Projects</div>
        <CodeButton href={personalInfo.socials.github} label="Check My GitHub" main />

        <div className="featured-projects">
          {projects.map((p, i) => (
            <div key={p.id} className={`feature-card tilt reveal${i % 2 ? " reverse" : ""}`}>
              <div className={`feature-visual feature-visual-${(i % 7) + 1}`}>
                <span className="material-symbols-outlined feature-icon">{projectIcons[p.id] || "deployed_code"}</span>
              </div>
              <div className="feature-content">
                <span className="feature-tag">{p.category}</span>
                <h3 className="feature-title">{p.title}</h3>
                <p className="feature-desc">{p.solution}</p>
                <div className="feature-tags">
                  {p.technologies.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="feature-actions">
                  {p.github && <CodeButton href={p.github} />}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="read-more-link">
                      Live Site <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                  )}
                  <div className="read-more-link" onClick={() => setOpenId(p.id)}>
                    Read More <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CurrentlyBuilding />
      </div>

      <div className={`overflow-screen${current ? " active" : ""}${closing ? " closing" : ""}`}>
        {current && (
          <div className="container">
            <h2 className="project-title">{current.title}</h2>
            <p className="description">{current.category}</p>
            {current.github && <CodeButton href={current.github} />}
            {[
              ["The Problem", current.problem],
              ["The Idea", current.idea],
              ["The Solution", current.solution],
            ].map(([h, t]) => (
              <div key={h} className="case-block">
                <h3>{h}</h3>
                <p className="description">{t}</p>
              </div>
            ))}
            <h3>Tools and Technologies:</h3>
            <ul className="feature-list">
              {current.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="results">Result: {current.result}</p>
            <div className="close-button" onClick={close}>Close</div>
          </div>
        )}
      </div>
    </>
  );
}
