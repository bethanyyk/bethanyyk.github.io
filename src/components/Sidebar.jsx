import { Link, useLocation } from "react-router-dom";
import { ACCENT, BORDER, INK, MUTED } from "../styles/tokens";
import { NAV_ITEMS, CONNECT_LINKS } from "../data/nav";
import FilterBar from "./FilterBar";

export default function Sidebar({ activeFilter, setActiveFilter, counts, isMobileOpen, onClose }) {
  const { pathname } = useLocation();
  const isWork = pathname === "/work" || pathname === "/";

  return (
    <aside
      className={`sidebar${isMobileOpen ? " sidebar-open" : ""}`}
      aria-hidden={!isMobileOpen ? undefined : "false"}
    >
      <div style={{ marginBottom: 4 }}>
        <div className="serif" style={{ fontSize: 16, letterSpacing: "0.1em", fontWeight: 1000, color: INK, marginBottom: 12 }}>
          Bethany Kim
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.75, color: MUTED }}>
          Connecting ideas across design, research, and data to understand how people and systems shape each other.
        </p>
      </div>

      <hr className="sidebar-rule"/>

      <div style={{ marginBottom: 4 }}>
        <span className="sidebar-label">Navigation</span>
        {NAV_ITEMS.map(({ id, label, idx, path }) => {
          const active =
            pathname === path ||
            pathname.startsWith(path + "/") ||
            (path === "/work" && pathname === "/");
          return (
            <Link key={id} to={path} className={`nav-btn${active ? " active" : ""}`} onClick={onClose}>
              <span className="nav-index">{idx}</span>
              <span style={{ flex: 1 }}>{label}</span>
            </Link>
          );
        })}
      </div>

      <hr className="sidebar-rule"/>

      {isWork && (
        <>
          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={(f) => { setActiveFilter(f); onClose?.(); }}
            counts={counts}
          />
          <hr className="sidebar-rule"/>
        </>
      )}

      <div style={{ marginBottom: 4 }}>
        <span className="sidebar-label">Connect</span>
        {CONNECT_LINKS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="connect-link">
            <span style={{ color: BORDER }}>✦</span>
            <span>{label}</span>
            <span style={{ color: "#c0b8b0", fontSize: 11, marginLeft: "auto" }}>↗</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
