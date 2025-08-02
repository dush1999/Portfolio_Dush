import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">DA</div>

      {/* Hamburger or Close button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Overlay menu */}
      <nav className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#ml-projects" onClick={handleLinkClick}>Research Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
