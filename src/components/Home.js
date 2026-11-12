
import React from 'react';
import './styles/Home.css';
import { FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const resumeLink = '/Gotam_Sai_Varshith.pdf';

  return (
    <div className="home-container">
      <h1 className="main-title">
        Hello, I'm <br /> Gotam Sai Varshith
      </h1>

      <h2 className="subtitle">
        Transforming complex data into actionable insights through
        analytics, business intelligence, and machine learning.
      </h2>

      <a
        href={resumeLink}
        className="cta-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFileAlt style={{ marginRight: '8px' }} />
        View Resume
      </a>
    </div>
  );
};

export default Home;
