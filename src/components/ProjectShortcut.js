import './ProjectShortcut.css'

const ProjectShortcut = ({ img, title, link }) => {
    return (
      <article className="card">
        <section className="card__hero" style={{ backgroundImage: `url(/${img})` }}></section>
        <footer className="card__footer">
          <div className="card__text">
            <p className="card__title">
              {title}
            </p>
          </div>
          <button className="card__btn" onClick={() => window.location.href = link}>View</button>
        </footer>
      </article>
    );
  };
  
  export default ProjectShortcut;