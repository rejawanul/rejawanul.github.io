import { portfolioData } from "../data/portfolioData";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  const { academicTech } = portfolioData.experience;

  return (
    <div className="experience-section" id="experience">
      <p className="eyebrow reveal">Career Journey</p>
      <h2 className="section-title reveal">Experience</h2>

      <div className="timeline">
        {academicTech.map((item) => (
          <TimelineItem key={item.role + item.organization} {...item} />
        ))}
      </div>
    </div>
  );
}
