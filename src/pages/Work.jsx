import { useMemo } from "react";
import { MUTED, BORDER } from "../styles/tokens";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Work({ activeFilter }) {
  const filtered = useMemo(
    () => activeFilter === "all" ? PROJECTS : PROJECTS.filter(p => p.categories.includes(activeFilter)),
    [activeFilter],
  );

  const leftCol  = filtered.filter((_, i) => i % 2 === 0);
  const rightCol = filtered.filter((_, i) => i % 2 === 1);

  return (
    <>
      {filtered.length === 0 ? (
        <div style={{
          padding: "80px 40px", textAlign: "center",
          color: MUTED, fontSize: 13, letterSpacing: "0.06em",
        }}>
          <div style={{ fontSize: 28, marginBottom: 16, color: BORDER }}>—</div>
          NO PROJECTS MATCH THIS FILTER
        </div>
      ) : (
        <div className="work-columns">
          <div className="work-column">
            {leftCol.map((p, colIdx) => (
              <ProjectCard key={p.id} project={p} index={colIdx * 2}/>
            ))}
          </div>
          <div className="work-column">
            {rightCol.map((p, colIdx) => (
              <ProjectCard key={p.id} project={p} index={colIdx * 2 + 1}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
