import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Custom SVG Brand Icons since they are not in the current lucide-react package
function GitHubIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function UpworkIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" role="img" aria-label="Upwork">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
    </svg>
  );
}

function FiverrIcon({ size = 20 }) {
  // Precisely crafted Fiverr "fi" ligature brand mark
  return (
    <svg viewBox="5 3.5 10.5 12" width={size} height={size} fill="currentColor" role="img" aria-label="Fiverr">
      {/* "f" — curved top, vertical stem */}
      <path d="M7 14.5V9.5H5.5V8H7V7.2C7 5.4 8.1 4 10.2 4h1.3v1.7h-.8c-.8 0-1.2.4-1.2 1.1V8H11v1.5H9.5v5H7z" />
      {/* shared crossbar between f and i */}
      <path d="M5.5 8h9v1.5h-9z" />
      {/* "i" — vertical stem */}
      <path d="M13 9.5h1.5v5H13z" />
      {/* "i" — dot */}
      <circle cx="13.75" cy="7" r="1" />
    </svg>
  );
}

export default function Sidebar() {
  const { personalInfo } = portfolioData;

  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <div className="profile-container">
          <img
            src="/profile.jpg"
            alt={personalInfo.fullName}
            className="profile-photo"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300?text=Profile+Photo";
            }}
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-name">{personalInfo.fullName}</h1>
          <p className="profile-tagline">{personalInfo.tagline}</p>

          <div className="profile-roles">
            {personalInfo.roles.map((role, idx) => (
              <span key={idx} className="role-tag">
                {role}
              </span>
            ))}
          </div>

          <hr className="divider" />

          <ul className="contact-list">
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>{personalInfo.location}</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </li>
          </ul>

          <hr className="divider" />

          {/* Social Icons */}
          <div className="social-links">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={personalInfo.socials.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn text-bold"
              title="Upwork"
            >
              <UpworkIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn text-bold"
              title="Fiverr"
            >
              <FiverrIcon size={18} />
            </a>
          </div>

          <hr className="divider" />

          {/* CV Section */}
          <div className="cv-buttons">
            <a
              href={personalInfo.cvFiles.academic}
              download="Rejawanul_Haque_Academic_CV.pdf"
              className="btn btn-primary btn-cv"
            >
              Academic & Technical CV
            </a>
            <a
              href={personalInfo.cvFiles.creative}
              download="Md_Rejawanul_Haque_Video_Editing_CV.pdf"
              className="btn btn-outline btn-cv"
            >
              Creative & Video CV
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
