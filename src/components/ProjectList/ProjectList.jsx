import React from 'react';
import PropTypes from 'prop-types';
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

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
