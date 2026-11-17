import { portfolioData } from "../data/portfolioData";

// simpleicons.org slugs for skills that have a logo
const iconSlugs = {
  "Python": "python",
  "JavaScript (React, Vite)": "javascript",
  "HTML / CSS": "html5",
  "Swift": "swift",
  "SQL": "mysql",
  "TensorFlow": "tensorflow",
  "PyTorch": "pytorch",
  "YOLOv8": "yolo",
  "OpenCV": "opencv",
  "Git & GitHub": "github",
  "VS Code / Jupyter": "jupyter",
  "FFmpeg": "ffmpeg",
  "yt-dlp": "youtube",
  "Adobe Premiere Pro": "adobepremierepro",
  "Adobe After Effects": "adobeaftereffects",
  "Adobe Photoshop": "adobephotoshop",
};

const categoryIcons = ["terminal", "neurology", "build", "movie_edit"];

function Icon({ name }) {
  const slug = iconSlugs[name];
  if (!slug) return null;
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      loading="lazy"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const all = skills.flatMap((c) => c.items);
  const half = Math.ceil(all.length / 2);
  const rows = [all.slice(0, half), all.slice(half)];

  return (
    <div className="skills-section" id="skills">
      <p className="eyebrow reveal">Toolbox</p>
      <h2 className="section-title reveal">Skills &amp; Tools</h2>
      <p className="skills-sub reveal">
        The languages, ML frameworks, annotation tools, and creative software I reach for most.
      </p>

      {rows.map((row, r) => (
        <div key={r} className={`marquee-row reveal${r === 1 ? " reverse" : ""}`}>
          <div className="marquee-fade marquee-fade-left"></div>
          <div className="marquee-fade marquee-fade-right"></div>
          <div className="marquee-track">
            {[...row, ...row].map((name, i) => (
              <span key={i} className="marquee-chip">
                <Icon name={name} />
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="skills-grid">
        {skills.map((cat, i) => (
          <div key={cat.category} className="skill-category tilt reveal">
            <h3>
              <span className="material-symbols-outlined">{categoryIcons[i] || "bolt"}</span> {cat.category}
            </h3>
            <div className="skill-pills">
              {cat.items.map((item) => (
                <span key={item} className="skill-pill">
                  <Icon name={item} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
