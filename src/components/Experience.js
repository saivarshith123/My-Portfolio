import React from 'react';
import './styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Intern at Google Developers</h3>
        <p className="experience-details">India Edu Community | June 2024 - July 2024</p>
        <ul className="responsibilities-list">
          <li>Led the optimization and tuning of AI models to improve their efficiency and accuracy.</li>
          <li>Developed and implemented an AI model for data preprocessing, model selection, and validation using Google TensorFlow and Python.</li>
          <li>Managed the end-to-end AI pipeline, including data collection, preprocessing, model training, and evaluation.</li>
          <li>Successfully executed the project, demonstrating expertise in the development and deployment of AI models.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
