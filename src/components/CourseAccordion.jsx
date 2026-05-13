import { CAT_COLOR, INK, MUTED, BORDER } from "../styles/tokens";

export default function CourseAccordion({ group, isOpen, onToggle }) {
  const accent = CAT_COLOR[group.cat];

  return (
    <div>
      <button
        onClick={onToggle}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "15px 0", borderTop: `1px solid ${BORDER}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }}/>
          <span className="course-group-label" style={{
            fontSize: 11, letterSpacing: "0.14em",
            color: isOpen ? accent : INK, fontWeight: 700,
            transition: "color 0.15s",
          }}>
            {group.label}
          </span>
          <span style={{ fontSize: 10, color: "#c0b8b0" }}>({group.courses.length})</span>
        </div>
        <span style={{
          fontSize: 16, color: MUTED, lineHeight: 1,
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
          display: "inline-block",
        }}>+</span>
      </button>

      {isOpen && (
        <div style={{ marginBottom: 8 }}>
          {group.courses.map((c, i) => (
            <div key={c.code} style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: "0 20px",
              padding: "13px 0",
              borderTop: `1px solid ${BORDER}`,
              borderBottom: i === group.courses.length - 1 ? `1px solid ${BORDER}` : "none",
            }}>
              <div style={{ fontSize: 10, color: accent, letterSpacing: "0.06em", paddingTop: 2, opacity: 0.85 }}>
                {c.code}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: INK, fontWeight: 600 }}>{c.title}</span>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noreferrer" style={{
                      fontSize: 10, letterSpacing: "0.08em",
                      color: accent,
                      textDecoration: "underline", textUnderlineOffset: "2px",
                      flexShrink: 0,
                    }}>
                      paper ↗
                    </a>
                  )}
                </div>
                <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
