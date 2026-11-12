import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p className="about-text">
I am a Computer Science graduate with a strong interest in Data Analytics, Business Intelligence, and Machine Learning. Skilled in Python, SQL, Power BI, Excel, and Tableau, I enjoy exploring complex datasets, uncovering meaningful patterns, and transforming raw data into actionable insights. Through academic projects and internship experiences, I have gained hands-on experience in data cleaning, ETL, exploratory data analysis, dashboard development, and machine learning. I am passionate about leveraging data-driven approaches to solve real-world business problems and support smarter decision-making.      </p>

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
