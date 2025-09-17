import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage'; 
import EducationPage from './pages/EducationPage'; 
import ExperiencePage from './pages/ExperiencePage'; // 1. Import the new page

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} /> {/* 2. Add the route */}
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
