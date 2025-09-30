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
      <div className="experience-item">
        <h3>Web Developer </h3>
        <p className="experience-details">Council of Scientific and Industrial Research | Jan 2025 - Sep 2025</p>
        <ul className="responsibilities-list">
          <li>Developed a fully functional, interactive educational game titled "Mathematics Masters: Lead the Way" for middle school students (Grades 6-8).</li>
          <li>Engineered the game's front-end using HTML, Tailwind CSS, and JavaScript to build an intuitive user interface with appealing graphics and animations.</li>
          <li>Implemented a dynamic question generation system with adaptive difficulty, featuring advanced algebraic expressions on "Green Stones" to provide strategic shortcuts.</li>
          <li>Integrated key gamification elements, including a 90-second timed challenge, real-time scoring, and immediate visual feedback to enhance student engagement and motivation.</li>
          <li>Collaborated within a team of four using Git for version control and followed an Agile development process over 35 weeks.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
