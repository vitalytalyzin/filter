import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects }) => {

  return (
    <div className="projects__wrapper">
      {projects.map((project, idx) => (
        <img
          key={idx}
          className="projects__img"
          src={project.img}
          alt={project.category}
        />
      ))}
    </div>
  );
};

export default ProjectList;
