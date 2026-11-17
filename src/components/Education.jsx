import { portfolioData } from "../data/portfolioData";
import TimelineItem from "./TimelineItem";

export default function Education() {
  const { education, personalInfo } = portfolioData;

  return (
    <div className="education-section" id="education">
      <div className="education-inner">
        <div className="education-photo reveal">
          <div className="education-photo-glow"></div>
          <img className="education-photo-img photo-cover tilt" src="profile.jpg" alt={personalInfo.fullName} />
        </div>

        <div className="education-content">
          <p className="eyebrow left reveal">Academic Foundation</p>
          <h2 className="section-title left reveal">Education</h2>

          <div className="timeline education-timeline">
            {education.map((item) => (
              <TimelineItem key={item.role + item.organization} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
