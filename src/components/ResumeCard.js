import './ResumeCard.css'

export function ExtracurricularCard({ title, description, details }) {
    return (
        <div className="extracurricular-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
}

export function WorkCard({ title, description, details }) {
    return (
        <div className="work-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
}