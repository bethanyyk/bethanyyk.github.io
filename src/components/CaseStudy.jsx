import { Link } from "react-router-dom";
import "../styles/case-study.css";

export function CaseStudyNav({ sections }) {
  return (
    <div className="cs-nav">
      <Link to="/work" className="cs-back">
        <span aria-hidden="true">←</span>
        <span>BACK TO WORK</span>
      </Link>
      {sections && sections.length > 0 && (
        <div className="cs-nav-sections">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="cs-section-link">
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Hero({ eyebrow, title, sub, meta, imageSrc, id }) {
  return (
    <section id={id} className="cs-section cs-hero-section">
      <div className="cs-inner cs-hero">
        <div className="cs-hero-stripe"/>
        {eyebrow && <div className="cs-hero-eyebrow">{eyebrow}</div>}
        <h1 className="cs-hero-title">{title}</h1>
        {sub && <p className="cs-hero-sub">{sub}</p>}
        {meta && meta.length > 0 && (
          <div className="cs-hero-meta">
            {meta.map(m => (
              <div key={m.label}>
                <span className="cs-hero-meta-label">{m.label}</span>
                <span className="cs-hero-meta-value">{m.value}</span>
              </div>
            ))}
          </div>
        )}
        {imageSrc && (
          <div className="cs-hero-image">
            <img src={imageSrc} alt={title}/>
          </div>
        )}
      </div>
    </section>
  );
}

export function CardsRow({ items }) {
  const isFourCards = items.length === 4;
  return (
    <div className={`cs-cards-row ${isFourCards ? "has-four-cards" : ""}`}>
      {items.map((it, i) => (
        <div key={i} className="cs-card">
          <div className="cs-card-stripe"/>
          {it.icon && <div className="cs-card-icon" aria-hidden="true">{it.icon}</div>}
          <div className="cs-card-title">{it.title}</div>
          <p className="cs-card-body">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Quotes({ quotes }) {
  return (
    <div className="cs-quotes">
      {quotes.map((q, i) => (
        <div key={i} className={`cs-quote ${q.side === "right" ? "right" : "left"}`}>
          <div className="cs-quote-icon" aria-hidden="true">{q.icon}</div>
          <div className="cs-quote-bubble">
            <p className="cs-quote-text">{q.text}</p>
            <div className="cs-quote-role">{q.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Personas({ personas }) {
  return (
    <div className="cs-personas">
      {personas.map(p => (
        <div key={p.title} className="cs-persona">
          <div className="cs-persona-title">{p.title}</div>
          <p className="cs-persona-desc">{p.description}</p>
          <div className="cs-persona-grid">
            <div className="cs-persona-col">
              {p.left.map(kv => (
                <div key={kv.label}>
                  <div className="cs-persona-kv-label">{kv.label}</div>
                  <div className="cs-persona-kv-value">{kv.value}</div>
                </div>
              ))}
            </div>
            <div className="cs-persona-col">
              {p.right.map(block => (
                <div key={block.label}>
                  <div className="cs-persona-block-label">{block.label}</div>
                  <ul className="cs-persona-block-list">
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Table({ columns, rows, className }) {
  const renderCell = (value, isRowLabel) => {
    if (Array.isArray(value)) {
      return <ul>{value.map((v, i) => <li key={i}>{v}</li>)}</ul>;
    }
    return value;
  };

  return (
    <div className={`cs-table-container ${className ?? ""}`}>
      <table className="cs-table">
        <thead>
          <tr>
            {columns.map(c => <th key={c.key}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {columns.map(c => (
                <td key={c.key} className={c.rowLabel ? "cs-table-rowlabel" : ""}>
                  {renderCell(row[c.key], c.rowLabel)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Steps({ steps }) {
  return (
    <div className="cs-steps">
      {steps.map((s, i) => (
        <div key={i} className="cs-step">
          <div className="cs-step-num">{String(i + 1).padStart(2, "0")}</div>
          <div className="cs-step-body">
            <div className="cs-step-title">{s.title}</div>
            <div className="cs-step-content">{s.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Features({ items }) {
  return (
    <div className="cs-features-list">
      {items.map((f, i) => (
        <div key={i} className="cs-feature">
          <div className="cs-feature-image">
            <img src={f.imageSrc} alt={f.title}/>
          </div>
          <div className="cs-feature-text">
            <div className="cs-feature-title">{f.title}</div>
            <p className="cs-feature-desc">{f.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
