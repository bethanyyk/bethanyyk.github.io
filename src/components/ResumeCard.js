import React from 'react';
import ProjectShortcut from './ProjectShortcut.js';
import './ResumeCard.css'

export function ResumeCard({ title, description, details, img, projectname, link }) {
    return (
        <div className="resume-card">
            <div className="resume-card-left">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                  {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                  ))}
              </ul>
            </div>
            <div className="resume-card-right">
            <ProjectShortcut img={img} title={projectname} link={link} />
            </div>
        </div>
    );
}

export function BoringResumeCard({ title, description, details }) {
    return (
        <div className="boring-resume-card">
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