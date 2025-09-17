import React from 'react';
import './styles/Home.css';
import { FaFileAlt } from 'react-icons/fa'; // Import a file icon

const Home = () => {
  // Paste your resume link here
  const resumeLink = "https://www.google.com";

  return (
    <div className="home-container">
      <h1 className="main-title">
        Hello, I'm <br /> Gotam Sai Varshith
      </h1>
      <h2 className="subtitle">
        A versatile developer turning complex problems into elegant, intelligent solutions.
      </h2>

      {/* Updated button code */}
      <a 
        href={resumeLink} 
        className="cta-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaFileAlt style={{ marginRight: '8px' }} /> View Resume
      </a>
    </div>
  );
};

export default Home;
