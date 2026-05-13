import { useState } from "react";
import { CAT_COLOR, INK, MUTED, BORDER } from "../styles/tokens";
import { EDUCATION, EXPERIENCE, ORGS } from "../data/resume";
import { COURSE_GROUPS } from "../data/courses";
import CourseAccordion from "../components/CourseAccordion";
import ResumeCard from "../components/ResumeCard";

function CardGrid({ items, getKey, mapProps }) {
  const left  = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);
  return (
    <div className="resume-grid">
      <div className="resume-grid-col">
        {left.map(item => <ResumeCard key={getKey(item)} {...mapProps(item)}/>)}
      </div>
      <div className="resume-grid-col">
        {right.map(item => <ResumeCard key={getKey(item)} {...mapProps(item)}/>)}
      </div>
    </div>
  );
}

export default function Resume() {
  const [openGroups, setOpenGroups] = useState({});
  const toggleGroup = (label) => setOpenGroups(g => ({ ...g, [label]: !g[label] }));

  return (
    <div className="resume-root" style={{ padding: "44px 48px" }}>
      <div className="resume-section">
        <h1 className="serif" style={{
          fontSize: "clamp(40px,5vw,64px)", fontWeight: 400, color: INK,
          lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 40,
        }}>
          Resume
        </h1>
      </div>

      <div className="resume-section">
        <div className="resume-section-title" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#c0b8b0", marginBottom: 4 }}>
          Education
        </div>
        <div style={{
          padding: "20px 0",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 475, color: INK, marginBottom: 4 }}>
                {EDUCATION.school}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {EDUCATION.majors.map(m => (
                  <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: CAT_COLOR[m.cat], flexShrink: 0 }}/>
                    <span style={{ fontSize: 13, color: INK }}>{m.label}</span>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: MUTED, flexShrink: 0 }}/>
                  <span style={{ fontSize: 13, color: MUTED }}>{EDUCATION.minor}</span>
                </div>
              </div>
            </div>
            <span className="resume-date" style={{ color: "#c0b8b0", fontSize: 10, letterSpacing: "0.06em", flexShrink: 0 }}>
              {EDUCATION.date}
            </span>
          </div>
        </div>
      </div>

      <div className="resume-section" style={{ marginTop: 48 }}>
        <div className="resume-section-title" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#c0b8b0" }}>
          Experience
        </div>
        <CardGrid
          items={EXPERIENCE}
          getKey={e => e.company}
          mapProps={e => ({
            name: e.company, role: e.role, date: e.date,
            bullets: e.bullets, logo: e.logo, projectSlug: e.projectSlug,
          })}
        />
      </div>

      <div className="resume-section" style={{ marginTop: 48 }}>
        <div className="resume-section-title" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#c0b8b0" }}>
          Orgs &amp; Leadership
        </div>
        <CardGrid
          items={ORGS}
          getKey={e => e.org}
          mapProps={e => ({
            name: e.org, role: e.role, date: e.date,
            bullets: e.bullets, logo: e.logo, projectSlug: e.projectSlug,
          })}
        />
      </div>

      <div className="resume-section" style={{ marginTop: 48 }}>
        <div className="resume-section-title" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#c0b8b0", marginBottom: 4 }}>
          Coursework
        </div>
        {COURSE_GROUPS.map(group => (
          <CourseAccordion
            key={group.label}
            group={group}
            isOpen={!!openGroups[group.label]}
            onToggle={() => toggleGroup(group.label)}
          />
        ))}
        <div style={{ borderTop: `1px solid ${BORDER}` }}/>
      </div>
    </div>
  );
}
