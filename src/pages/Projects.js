import React, { useState, useMemo, useEffect, Suspense } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectPopUp from '../components/ProjectPopUp';
import './Projects.css';

const loadProjectContent = (projectName) => {
  return React.lazy(() => import(`../projects/${projectName}.js`));  // Dynamically imports based on the project name
};

const Projects = () => {
  const projectData = useMemo(() => [
    {
      image: '/project-cards/geffen-ux.png',
      title: 'Geffen Playhouse Designs',
      categories: ['UI/UX Design', 'Graphic Design']
    },
    {
      image: '/project-cards/bsa.png',
      title: 'Bruin Sports Analytics Articles',
      categories: ['Data Analysis', 'Writing']
    },
    {
      image: '/project-cards/pathify.png',
      title: 'Pathify',
      categories: ['Software Development']
    },
    {
      image: '/project-cards/scripps.png',
      title: 'Freyja Dengue Extension',
      categories: ['Data Analysis', 'Biological Research']
    },
    {
      image: '/project-cards/whatcoffee.png',
      title: 'whatcoffee Website',
      categories: ['Software Development', 'UI/UX Design']
    },
    {
      image: '/project-cards/trek.png',
      title: 'Trek',
      categories: ['UI/UX Design']
    },
    {
      image: '/project-cards/acm-workshops.png',
      title: 'ACM Design Workshops',
      categories: ['UI/UX Design']
    },
    {
      image: '/project-cards/acm-requests.png',
      title: 'ACM Design Requests',
      categories: ['Graphic Design']
    },
    {
      image: '/project-cards/db.png',
      title: 'Daily Bruin Articles',
      categories: ['Data Analysis', 'Writing']
    }
  ], []);

  // Filter by category
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProjects = selectedCategory
    ? projectData.filter((project) =>
        project.categories.includes(selectedCategory)
      )
    : projectData;
  
  // Project pop-ups
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').replace('/', ''); // Normalize the hash
    if (hash) {
      const project = projectData.find(
        (p) => hash === p.title.toLowerCase().replace(/[\s/]+/g, '-')
      );
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [projectData]);  

  const handleProjectClick = (project) => {
    const hash = `#${project.title.toLowerCase().replace(/[\s/]+/g, '-')}`;
    window.location.hash = hash;
    setSelectedProject(project);
  };  
  
  const closePopUp = () => {
    window.location.hash = '';
    setSelectedProject(null);
  }

  return (
    <div className="projects-page">
      <div className="project-filters">
        <label htmlFor="category-select">Filter by category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="Software Development">Software Development</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Writing">Writing</option>
          <option value="Biological Research">Biological Research</option>
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            categories={project.categories}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectPopUp
          title={selectedProject.title}
          content={
            <Suspense fallback={<div>Loading...</div>}>
              {React.createElement(loadProjectContent(selectedProject.title.toLowerCase().replace(/[\s/]+/g, '-')))}
            </Suspense>
          }
          onClose={closePopUp}
        />
      )}
    </div>
  );
};

export default Projects;