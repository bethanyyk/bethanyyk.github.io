import React from 'react';
import './ProjectPopUp.css';
const ProjectPopUp = ({ title, content, onClose }) => {
  return (
    <div className="project-popup-overlay" onClick={onClose}>
      <div className="project-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup" onClick={onClose}>
        <img src="/x.svg" alt="Close" className="close-icon" />
        </button>
        <div className="project-popup-title">
          <h1>{title}</h1>
        </div>
        <div className="project-popup-content">
          {content}
        </div>
      </div>
    </div>
  );
};
export default ProjectPopUp;