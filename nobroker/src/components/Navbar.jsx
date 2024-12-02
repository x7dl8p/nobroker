import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-icon">🔑</span>
        <Link to="/" className="logo-text">NOBROKER</Link>
      </div>
      <div className={`navbar-items ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/rent" className="nav-btn dropdown-btn">Rent</Link>
        <Link to="/post-property" className="nav-btn">Post Your Property</Link>
        <Link to="/signup" className="nav-btn">Sign up</Link>
        <Link to="/loginPage" className="nav-btn">Log in</Link>
        <span className="favorites">❤️</span>
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;