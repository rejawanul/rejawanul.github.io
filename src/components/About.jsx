import { Code, BookOpen, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="section card">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="bio-lead">{personalInfo.detailedBio}</p>
        
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="philosophy-icon-container">
              <BookOpen size={24} className="philosophy-icon" />
            </div>
            <h3>Self-Driven Builder</h3>
            <p>I learn by executing. When I learn a data science concept or code routine, I apply it to optimize a daily process or business task.</p>
          </div>
          
          <div className="philosophy-card">
            <div className="philosophy-icon-container">
              <Code size={24} className="philosophy-icon" />
            </div>
            <h3>Computer Vision Focused</h3>
            <p>5+ years of practical dataset experience has taught me what makes machine learning models succeed: high-quality ground-truth preparation.</p>
          </div>

          <div className="philosophy-card">
            <div className="philosophy-icon-container">
              <Layers size={24} className="philosophy-icon" />
            </div>
            <h3>Business-Tested Discipline</h3>
            <p>Managing sports editing clients globally has taught me project ownership, sharp communication, fast turnaround times, and team management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
