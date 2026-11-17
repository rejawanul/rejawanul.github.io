import { portfolioData } from "../data/portfolioData";
import TimelineItem from "./TimelineItem";

const contentVerticals = {
  role: "Content Verticals",
  organization: "Global Reach",
  period: "US & International Clients",
  details: [
    "Specializing in sports highlights, talking-head layouts, documentary narratives, and fast-paced cinematic shorts designed to maximize retention.",
  ],
};

export default function CreativeBusiness() {
  const { experience } = portfolioData;

  return (
    <div className="experience-section beyond-code" id="beyond-code">
      <p className="eyebrow reveal">Beyond Code</p>
      <h2 className="section-title reveal">I Build Businesses Too</h2>

      <div className="about-copy beyond-copy reveal">
        <p>
          Running a video editing business has built my skills in operations, client relations, and delivery timelines.
          Editing videos and managing client expectations is more than a side gig—it is where I learned how to run a
          business. Working with international sports channels requires clear communication, fast turnaround times, and
          strict attention to detail.
        </p>
        <p>
          I bring this same operational discipline to computer vision dataset annotation. Whether labeling pixel-perfect
          boundaries for medical images or syncing complex timelines for sports editors, my goal is always to deliver
          clean, accurate work on schedule.
        </p>
      </div>

      <div className="timeline">
        {experience.creativeBusiness.map((item) => (
          <TimelineItem key={item.role + item.organization} {...item} />
        ))}
        <TimelineItem {...contentVerticals} />
      </div>
    </div>
  );
}
