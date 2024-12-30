import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      image: '/project-cards/opica.png',
      title: 'OPICA Donor Analysis',
      categories: ['Data Analysis'],
      description: 'Analyze trends in donations to OPICA and the various factors that influence donors.',
    },
    {
      image: '/project-cards/geffen-merch.png',
      title: 'Geffen Playhouse Merchandising',
      categories: ['UI/UX Design', 'Graphic Design'],
      description: 'Design a webpage for an online store. Create merch designs for younger audiences.',
    },
    {
      image: '/project-cards/geffen-ux.png',
      title: 'Geffen Playhouse UX Audit',
      categories: ['UI/UX Design'],
      description: "Perform a UX audit of the Geffen's website, focusing on ease of use, ticketing experience, and navigation.",
    },
    {
      image: '/project-cards/bsa.png',
      title: 'Bruin Sports Analytics Articles',
      categories: ['Data Analysis', 'Writing'],
      description: 'Write sports articles that are driven by data science and statistics.',
    },
    {
      image: '/project-cards/pathify.png',
      title: 'Pathify',
      categories: ['Software Development'],
      description: 'Create a full-stack web app that allows UCLA students to track their internship applications.',
    },
    {
      image: '/project-cards/scripps.png',
      title: 'Freyja Dengue Extension',
      categories: ['Data Analysis', 'Biological Research'],
      description: 'Expand Freyja to detect dengue virus lineages within wastewater samples.',
    },
    {
      image: '/project-cards/whatcoffee.png',
      title: 'whatcoffee Website',
      categories: ['Software Development', 'UI/UX Design'],
      description: 'Design and develop a website for a small business.',
    },
    {
      image: '/project-cards/trek.png',
      title: 'Trek',
      categories: ['UI/UX Design'],
      description: 'Design a walking navigation app tailored to enhance accessibility at UCLA.',
    },
    {
      image: '/project-cards/acm-workshops.png',
      title: 'ACM Design Workshops',
      categories: ['UI/UX Design'],
      description: 'Host workshops that teach UI/UX to UCLA students looking to break into design.',
    },
    {
      image: '/project-cards/acm-requests.png',
      title: 'ACM Design Requests',
      categories: ['Graphic Design'],
      description: 'Design, manage, and support the visual identity of ACM at UCLA.',
    },
    {
      image: '/project-cards/db.png',
      title: 'Daily Bruin Articles',
      categories: ['Data Analysis', 'Writing'],
      description: 'Investigate public data, experiment with technology, and apply quantitative insights to real life.',
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProjects = selectedCategory
    ? projectData.filter((project) =>
        project.categories.includes(selectedCategory)
      )
    : projectData;

  const handleProjectClick = (title) => {
    alert(`More details for ${title}`);
  };

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
            description={project.description}
            onClick={() => handleProjectClick(project.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;