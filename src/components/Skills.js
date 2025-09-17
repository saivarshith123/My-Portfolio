import React from 'react';
import './styles/Skills.css';
// Importing relevant icons for the new categories
import { FaCode, FaCogs, FaTools } from 'react-icons/fa';

// Updated skills object based on your list
const skills = {
  languagesAndDatabases: [
    'Python', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Oracle'
  ],
  frameworks: [
    'Blender', 'React', 'NumPy', 'Pandas', 'Matplotlib', 'Bootstrap'
  ],
  tools: [
    'GitHub', 'Google Cloud', 'Jupyter', 'Visual Studio Code', 'VirtualBox', 'Figma', 'Cisco', 'Power BI'
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      
      <div className="skills-category">
        <h3><FaCode /> Languages & Databases</h3>
        <div className="skills-grid">
          {skills.languagesAndDatabases.map((skill, index) => <div className="skill-card" key={index}>{skill}</div>)}
        </div>
      </div>

      <div className="skills-category">
        <h3><FaCogs /> Frameworks & Libraries</h3>
        <div className="skills-grid">
          {skills.frameworks.map((skill, index) => <div className="skill-card" key={index}>{skill}</div>)}
        </div>
      </div>

      <div className="skills-category">
        <h3><FaTools /> Tools & Platforms</h3>
        <div className="skills-grid">
          {skills.tools.map((skill, index) => <div className="skill-card" key={index}>{skill}</div>)}
        </div>
      </div>

    </div>
  );
};

export default Skills;
