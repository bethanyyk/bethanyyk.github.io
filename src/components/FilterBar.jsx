import { CAT_COLOR, MUTED, BORDER, INK } from "../styles/tokens";
import { CATEGORIES } from "../data/categories";

export default function FilterBar({ activeFilter, setActiveFilter, counts }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <span className="sidebar-label">Filter by discipline</span>
      {CATEGORIES.map(({ id, label, color }) => (
        <button
          key={id}
          className={`filter-btn${activeFilter === id ? " active" : ""}`}
          onClick={() => setActiveFilter(id)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
              background: id === "all"
                ? `linear-gradient(135deg,${CAT_COLOR.design},${CAT_COLOR.research},${CAT_COLOR.data},${CAT_COLOR.writing})`
                : color,
              opacity: activeFilter === id ? 1 : 0.3,
              transition: "opacity 0.15s",
            }}/>
            <span style={{ color: activeFilter === id ? INK : MUTED, transition: "color 0.15s" }}>
              {label}
            </span>
          </div>
          <span className="filter-pill" style={{
            background: activeFilter === id ? color + "18" : "transparent",
            color: activeFilter === id ? color : "#c0b8b0",
            border: `1px solid ${activeFilter === id ? color + "55" : BORDER}`,
          }}>
            {counts[id] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
