
import React from 'react';
import './styles/Skills.css';
import {
  FaCode,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaTools,
  FaCogs
} from 'react-icons/fa';

const skills = {
  programming: [
    'Python',
    'SQL',
    'Java'
  ],

  dataEngineering: [
    'PySpark',
    'ETL',
    'Data Transformation',
    'Data Cleaning',
    'Data Modeling'
  ],

  dataAnalysis: [
    'Pandas',
    'NumPy',
    'Excel',
    'Power Query',
    'Matplotlib'
  ],

  databases: [
    'PostgreSQL',
    'MySQL',
    'SQL Server',
    'Oracle',
    'MongoDB'
  ],

  dataVisualization: [
    'Power BI',
    'Tableau',
    'DAX',
    'Matplotlib'
  ],

  machineLearning: [
    'Supervised Learning',
    'Linear Regression',
    'Logistic Regression',
    'Decision Trees',
    'Support Vector Machines',
    'K-Means Clustering',
    'Hierarchical Clustering',
    'PCA',
    'Model Evaluation'
  ],

  tools: [
    'Git',
    'GitHub',
    'Jupyter Notebook',
    'Visual Studio Code'
  ],

  analytics: [
    'Exploratory Data Analysis',
    'Statistical Analysis',
    'Dashboard Development',
    'KPI Reporting'
  ]
};

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      items: skills.programming
    },
    {
      title: 'Data Engineering',
      icon: <FaCogs />,
      items: skills.dataEngineering
    },
    {
      title: 'Data Analysis',
      icon: <FaChartBar />,
      items: skills.dataAnalysis
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      items: skills.databases
    },
    {
      title: 'Data Visualization & BI',
      icon: <FaChartBar />,
      items: skills.dataVisualization
    },
    {
      title: 'Machine Learning',
      icon: <FaBrain />,
      items: skills.machineLearning
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools />,
      items: skills.tools
    },
    {
      title: 'Analytics Concepts',
      icon: <FaCogs />,
      items: skills.analytics
    }
  ];

  return (
    <section className="skills-container" id="skills">
      <h2>Technical Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to transform data
        into meaningful insights and solutions.
      </p>

      <div className="skills-categories">
        {categories.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>
              <span className="category-icon">
                {category.icon}
              </span>
              {category.title}
            </h3>

            <div className="skills-grid">
              {category.items.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
