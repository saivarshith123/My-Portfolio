import React from 'react';
import './styles/Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2>Formal Education</h2>

      <div className="education-item">
        <h3>B.Tech. in Computer Science</h3>
        <p className="education-date">September 2022 - Present</p>
        <p className="education-courses">
          <strong>Relevant Coursework:</strong> Computer Science Engineering, Java development, Machine Learning, Web Development.
        </p>
      </div>

      <div className="education-item">
        <h3>Intermediate in MPC Course</h3>
        <p className="education-date">March 2020 - April 2022</p>
        <p className="education-courses">
          <strong>Relevant Coursework:</strong> Mathematics, Physics, Chemistry, English, Telugu, IIT Training.
        </p>
      </div>

      <div className="education-item">
        <h3>Primary Studies</h3>
        <p className="education-date">March 2019 - May 2020</p>
        <p className="education-courses">
          <strong>Relevant Coursework:</strong> Mathematics, English, Remaining Standard Subjects.
        </p>
      </div>

    </div>
  );
};

export default Education;
