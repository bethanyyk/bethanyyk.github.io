import { BORDER, INK, MUTED } from "../styles/tokens";
import { ABOUT_PHOTOS } from "../data/about";

export default function About() {
  return (
    <div>
      <div style={{ display: "flex", gap: 1, height: 210, borderBottom: `1px solid ${BORDER}` }}>
        {ABOUT_PHOTOS.map((src, i) => (
          <img key={i} src={src} alt="" style={{ flex: 1, objectFit: "cover", width: "100%", height: "100%" }}/>
        ))}
      </div>

      <div style={{ padding: "44px 48px 0" }}>
        <h1 className="serif" style={{
          fontSize: "clamp(48px,6vw,78px)", fontWeight: 400, color: INK,
          lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 32,
        }}>
          Thinking <em>across</em> disciplines.
        </h1>

        <div style={{ marginBottom: 44 }}>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, marginBottom: 16 }}>
            Hi, I'm Bethany! I'm a triple major at UCLA studying Cognitive Science, Computational & Systems Biology, and Linguistics & Computer Science, with a minor in Statistics & Data Science. It might seem like I'm doing too much, but I'm fascinated by how ideas become more powerful when disciplines collide. Some of my favorite examples of that are:
          </p>
          <div style={{ marginBottom: 16 }}>
            {[
              "The Wright brothers studying bird flight mechanics before building airplanes",
              "Neonatal care teams redesigning emergency handoffs after observing Formula 1 pit crews",
              "Neural networks being modeled after the structure of the human brain",
              "Architects and biologists studying termite mounds to design buildings with natural cooling and ventilation systems",
              "A Swiss engineer creating Velcro after noticing how burrs stuck to his dog's fur during a hike"
            ].map(item => (
              <div key={item} style={{ fontSize: 13, color: MUTED, lineHeight: 1.8, display: "flex", gap: 10, marginBottom: 8 }}>
                <span style={{ color: MUTED, flexShrink: 0, userSelect: "none" }}>✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, marginBottom: 16 }}>
            That mindset has shaped the way I approach my own work, too. Good research means very little if you can't communicate it clearly. Good design falls apart without understanding the people behind it. Data without narrative is forgettable, and narrative without evidence is fragile.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, marginBottom: 16 }}>
            Most of my work lives somewhere between design, research, storytelling, and systems thinking — which usually means I'm bouncing between wireframes, datasets, papers, and half-finished notes. Honestly, I wouldn't have it any other way. I'm less interested in fitting neatly into a single title and more interested in learning how different fields can inform one another to build things that are thoughtful, useful, and human.
          </p>
        </div>
      </div>
    </div>
  );
}
