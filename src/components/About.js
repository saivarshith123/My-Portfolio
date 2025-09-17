import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p className="about-text">
        Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
      </p>

      <ul className="personal-details">
        <li><strong>Birthday:</strong> 8 March 2005</li>
        <li><strong>Phone:</strong> +91 8919411353</li>
        <li><strong>City:</strong> Nellore, AndhraPradesh, 517325</li>
        <li><strong>Email:</strong> saivarshith1085@gmail.com</li>
      </ul>
    </div>
  );
};

export default About;
