import React, { useState } from 'react'; // 1. Import useState
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // 2. Import menu icons
import './styles/Header.css';

const Header = () => {
  // 3. State to manage the menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 4. Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // 5. Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span>SAI</span>VARSHITH
        </Link>
        
        {/* 6. The navigation menu with a conditional class */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        
        {/* 7. The hamburger/close icon for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
