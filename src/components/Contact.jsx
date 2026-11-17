import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState("");
  const waNumber = personalInfo.phone.replace(/[^0-9]/g, "");
  const waLink = `https://wa.me/${waNumber}`;

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  // Opens Gmail's web compose in a new tab (works on every browser, even
  // without a mail app set up), instead of a mailto: redirect.
  const gmailLink = (subject = "", body = "") =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const subject = formData.get("subject") || "Contact from Portfolio";
    const message = formData.get("message");
    const body = `Hi Reja,\n\nMy name is ${name}.\n\n${message}`;
    // On WhatsApp-friendly devices the visitor can also choose WhatsApp below.
    window.open(gmailLink(subject, body), "_blank", "noopener");
  };

  return (
    <div className="contact-section" id="contact">
      <p className="eyebrow reveal light">Let's Connect</p>
      <h2 className="cont_title reveal">Have a problem worth solving?</h2>
      <p className="contact-sub reveal">
        Let's build something together or discuss computer vision, dataset pipelines, or sports content production.
      </p>
      <SocialLinks className="contact-social reveal" />

      <div className="contact-grid">
        <div className="contact-card reveal">
          <h3>Direct Channels</h3>
          <p>Prefer writing directly? Reach out through any of these:</p>
          <ul className="channel-list">
            <li>
              <span className="material-symbols-outlined">mail</span>
              <div>
                <small>Email</small>
                <a href={gmailLink()} target="_blank" rel="noopener noreferrer">{personalInfo.email}</a>
              </div>
              <button type="button" className="copy-btn" onClick={() => copy(personalInfo.email, "email")}>
                {copied === "email" ? "Copied" : "Copy"}
              </button>
            </li>
            <li>
              <span className="material-symbols-outlined">call</span>
              <div>
                <small>Phone / WhatsApp</small>
                <a href={waLink} target="_blank" rel="noopener noreferrer">{personalInfo.phone}</a>
              </div>
              <button type="button" className="copy-btn" onClick={() => copy(personalInfo.phone, "phone")}>
                {copied === "phone" ? "Copied" : "Copy"}
              </button>
            </li>
            <li>
              <span className="material-symbols-outlined">location_on</span>
              <div><small>Location</small><strong>{personalInfo.location}</strong></div>
            </li>
          </ul>
          <p className="contact-note"><strong>Note:</strong> I am remote-friendly and flexible with US/European time zones.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-card contact-form reveal">
          <div className="form-row">
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="e.g. John Doe" />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required placeholder="e.g. john@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="e.g. Computer Vision Project Annotation" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Describe the problem you're trying to solve..."></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Send via Email</button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={(e) => {
                const f = new FormData(e.currentTarget.form);
                const text = `Hi Reja, my name is ${f.get("name") || ""}.\n${f.get("subject") ? f.get("subject") + "\n" : ""}${f.get("message") || ""}`;
                window.open(`${waLink}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
              }}
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
