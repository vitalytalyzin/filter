import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import { filters, projects } from './data';
import './Portfolio.css';


const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  let selectedProjects;
  if (selectedFilter === 'All') {
    selectedProjects = projects;
  } else {
    selectedProjects = projects.filter(project => project.category === selectedFilter);
  }

  return (
    <div className="portfolio__wrapper">
      <div className="toolbar__wrapper">
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={setSelectedFilter}
        />
      </div>
      <div className="project-list__wrapper">
        <ProjectList projects={selectedProjects} />
      </div>
    </div>

  );
};

export default Portfolio;
