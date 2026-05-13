import { useState } from "react";
import { Link } from "react-router-dom";
import { MUTED } from "../styles/tokens";

export default function ResumeCard({ name, role, date, bullets, logo, projectSlug }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`resume-card${isOpen ? " is-open" : ""}`}
      onClick={() => setIsOpen(o => !o)}
    >
      <div className="resume-card-header">
        <div className="resume-card-logo">
          {logo ? (
            <img src={logo} alt="" />
          ) : (
            <div className="resume-card-logo-fallback">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div className="resume-card-body">
          <div className="resume-card-name">{name}</div>
          <div className="resume-card-role">{role}</div>
        </div>

        <div className="resume-card-right-stack">
          <div className="resume-card-right-top" style={{ display: "flex", alignItems: "center" }}>
            <span className="resume-card-date" style={{ paddingTop: 2 }}>{date}</span>
            <div className="resume-card-chevron" aria-hidden="true">
              {isOpen ? "−" : "+"}
            </div>
          </div>
          {projectSlug && (
            <Link
              to={`/work/${projectSlug}`}
              className="resume-card-project-chip"
              onClick={(e) => e.stopPropagation()}
            >
              ↗ Project
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="resume-card-details" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {bullets.map((bullet, i) => (
              <div key={i} style={{ fontSize: 12, color: MUTED, lineHeight: 1.75, display: "flex", gap: 8 }}>
                <span style={{ color: MUTED, flexShrink: 0, userSelect: "none" }}>✦</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
