import React from 'react';
import './styles/Projects.css';
// CORRECT PATH
import projectData from '../projectData'; // Import your project data
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <center>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub /> View on GitHub
                </a>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
