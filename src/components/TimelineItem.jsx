export default function TimelineItem({ role, organization, period, details = [], tags = [], children }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot"></div>
      <div className="timeline-card tilt">
        <div className="timeline-head">
          <div>
            <h3 className="timeline-role">{role}</h3>
            <p className="timeline-company">{organization}</p>
          </div>
          <span className="timeline-date">{period}</span>
        </div>
        {details.length > 0 && (
          <ul className="timeline-highlights">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
        {tags.length > 0 && (
          <div className="timeline-tags">
            {tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
