import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Work from "./pages/Work";
import Play from "./pages/Play";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectDetail from "./pages/ProjectDetail";
import { PROJECTS } from "./data/projects";
import { BG, INK } from "./styles/tokens";
import "./styles/globals.css";

function Shell() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const redirectPath = params.get('p');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [search, navigate]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const counts = useMemo(() => {
    const c = { all: PROJECTS.length };
    PROJECTS.forEach(p => {
      p.categories.forEach(cat => { c[cat] = (c[cat] ?? 0) + 1; });
    });
    return c;
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: BG, color: INK }}>
      <div className="mobile-topbar">
        <button
          className={`hamburger-btn${isMobileOpen ? " is-open" : ""}`}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(o => !o)}
        >
          <span/><span/><span/>
        </button>
        <span className="mobile-topbar-name">Bethany Kim</span>
      </div>

      <Sidebar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        counts={counts}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace/>} />
          <Route
            path="/work"
            element={<Work activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>}
          />
          <Route path="/work/:slug" element={<ProjectDetail/>} />
          <Route path="/play"   element={<Play/>}   />
          <Route path="/about"  element={<About/>}  />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell/>
    </BrowserRouter>
  );
}
