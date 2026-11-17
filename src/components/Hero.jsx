import { portfolioData } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

export default function Hero({ ready }) {
  const { personalInfo } = portfolioData;

  return (
    <div className="head" id="home">
      <div className="hero-glow hero-glow-1" id="glow1"></div>
      <div className="hero-glow hero-glow-2" id="glow2"></div>

      <div className="animation-container">
        <div className={`intro_hidden${ready ? " intro_visible" : ""}`}>
          <span className="expertise">
            <span className="pulse-dot"></span> Computer Vision Enthusiast
          </span>

          <h1 className="wellcome">
            Hi, I'm <span className="name">Md Rejawanul Haque</span>
          </h1>

          <p className="hero-text">
            <strong>{personalInfo.tagline}</strong> {personalInfo.intro}
          </p>

          <div className="hero-cta hero-cv">
            <a href={personalInfo.cvFiles.academic} download="Rejawanul_Haque_Academic_CV.pdf" className="btn btn-ghost magnetic">
              Academic &amp; Technical CV
            </a>
            <a href={personalInfo.cvFiles.creative} download="Md_Rejawanul_Haque_Video_Editing_CV.pdf" className="btn btn-ghost magnetic">
              Creative &amp; Video CV
            </a>
          </div>

          <SocialLinks className="hero-socials" />
        </div>

        <div className="hero-image-wrap">
          <div className="hero-photo-panel tilt">
            <canvas id="hero3d" className="hero-3d-canvas" aria-hidden="true"></canvas>
            <img
              className={`profile_pic_hidden photo-cover${ready ? " profile_pic_visible" : ""}`}
              src="profile.jpg"
              alt={personalInfo.fullName}
            />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </a>
    </div>
  );
}
