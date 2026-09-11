import { Mail, Phone, MapPin, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a static setup, we can trigger a mailto or integrate a contact service
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const subject = formData.get("subject") || "Contact from Portfolio";
    const message = formData.get("message");
    
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Reja,\n\nMy name is ${name}.\n\n${message}`)}`;
  };

  return (
    <section id="contact" className="section card">
      <h2 className="section-title">Have a problem worth solving?</h2>
      <p className="section-subtitle">Let's build something together or discuss computer vision, dataset pipelines, or sports content production.</p>

      <div className="contact-grid">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="e.g. John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required placeholder="e.g. john@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="e.g. Computer Vision Project Annotation" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Describe the problem you're trying to solve..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            <Send size={16} />
            <span>Send Message</span>
          </button>
        </form>

        <div className="contact-info-block">
          <h3>Direct Channels</h3>
          <p>Prefer writing directly? Reach out through any of these platforms:</p>

          <ul className="contact-channels-list">
            <li>
              <div className="channel-icon-bg">
                <Mail size={18} />
              </div>
              <div className="channel-text">
                <span className="channel-lbl">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="channel-val">{personalInfo.email}</a>
              </div>
            </li>
            <li>
              <div className="channel-icon-bg">
                <Phone size={18} />
              </div>
              <div className="channel-text">
                <span className="channel-lbl">Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`} className="channel-val">{personalInfo.phone}</a>
              </div>
            </li>
            <li>
              <div className="channel-icon-bg">
                <MapPin size={18} />
              </div>
              <div className="channel-text">
                <span className="channel-lbl">Location</span>
                <span className="channel-val">{personalInfo.location}</span>
              </div>
            </li>
          </ul>

          <div className="work-hours-notice">
            <p><strong>Note:</strong> I am remote-friendly and flexible with US/European time zones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
