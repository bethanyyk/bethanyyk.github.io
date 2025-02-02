import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, categories, onClick }) => {
  const formatCategoryClass = (category) =>
    category.toLowerCase().replace(/[\s/]+/g, '-');

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <div className="project-card-categories">
          {categories.map((category, index) => (
            <span
              key={index}
              className={`category ${formatCategoryClass(category)}`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;