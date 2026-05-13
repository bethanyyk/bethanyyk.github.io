import { Link } from "react-router-dom";
import { CAT_COLOR, CAT_LIGHT, INK, MUTED, BORDER } from "../styles/tokens";

export default function ProjectCard({ project, index }) {
  const p = project;
  const linkable = Boolean(p.slug);
  const cats = p.categories;
  const primaryCat = cats[0];

  const gradientBg = cats.length > 1
    ? `linear-gradient(135deg, ${cats.map(c => CAT_LIGHT[c]).join(", ")})`
    : CAT_LIGHT[primaryCat];

  const inner = (
    <>
      <div className="cat-stripe" style={{ display: "flex" }}>
        {cats.map(cat => (
          <div key={cat} style={{ flex: 1, height: "100%", background: CAT_COLOR[cat] }}/>
        ))}
      </div>
      <div style={{
        height: p.imgH,
        position: "relative",
        overflow: "hidden",
        backgroundImage: p.image ? `url(${p.image})` : "none",
        backgroundColor: p.image ? "transparent" : gradientBg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: `1px solid ${BORDER}`,
      }}>
      </div>
      <div style={{ padding: "16px 20px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
          {cats.map(cat => (
            <span key={cat} className="cat-badge" style={{
              color: CAT_COLOR[cat],
              border: `1px solid ${CAT_COLOR[cat]}44`,
              background: `${CAT_COLOR[cat]}0e`,
            }}>
              {cat}
            </span>
          ))}
          <span style={{ fontSize: 10, color: "#c0b8b0", letterSpacing: "0.06em", marginLeft: "auto", textTransform: "uppercase" }}>
            {p.year}
          </span>
        </div>
        <div className="serif" style={{
          fontSize: 32, fontWeight: 400, color: INK,
          lineHeight: 1.15, marginBottom: 12, letterSpacing: "-0.01em",
        }}>
          {p.title}
        </div>
        <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.7 }}>
          {p.desc}
        </div>
      </div>
    </>
  );

  const baseStyle = {
    animationDelay: `${index * 80}ms`,
    cursor: linkable ? "pointer" : "default",
    color: "inherit",
    textDecoration: "none",
    display: "block",
  };

  if (linkable) {
    return (
      <Link to={`/work/${p.slug}`} className="work-card" style={baseStyle}>
        {inner}
      </Link>
    );
  }

  return (
    <div className="work-card" style={baseStyle}>
      {inner}
    </div>
  );
}
