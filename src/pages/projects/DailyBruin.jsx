import { CaseStudyNav, Hero } from "../../components/CaseStudy";
import { ARTICLES } from "../../data/dailyBruin";
import "../../styles/case-study.css";

export default function DailyBruin() {
  const sections = ARTICLES.map((cat, i) => ({
    id: `category-${i}`,
    label: cat.label
  }));

  return (
    <>
      <CaseStudyNav sections={sections} />

      <main className="cs-root" style={{ "--cs-accent": "#FF6B35" }}>
        <div className="cs-hero-stripe" />

        {ARTICLES.map((category, catIndex) => (
          <section
            key={catIndex}
            id={`category-${catIndex}`}
            className="cs-section"
          >
            <div className="cs-inner">
              <h1>{category.label}</h1>

              <div className="articles-grid">
                {category.articles.map((article, artIndex) => (
                  <article
                    key={artIndex}
                    className="article-card"
                  >
                    {article.image && (
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-image-link"
                      >
                        <div className="article-image">
                          <img src={article.image} alt={article.title} />
                        </div>
                      </a>
                    )}

                    <div className="article-content">
                      <div className="article-header">
                        <p className="article-date">{article.date}</p>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="article-title-link"
                        >
                          <h2 className="article-title">{article.title}</h2>
                        </a>
                      </div>

                      {article.takeaways && article.takeaways.length > 0 && (
                        <div className="article-takeaways">
                          <h3>Key Takeaways</h3>
                          <ul>
                            {article.takeaways.map((takeaway, i) => (
                              <li key={i}>{takeaway}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                      >
                        Read more →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
