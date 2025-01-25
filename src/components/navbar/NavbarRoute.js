
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbarcss.css';

export default function NavbarRoute() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);


  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };


  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" id="iii">
        <div className="container">
          
          <button
            className="navbar-toggler mt-5 btn-white bg-white"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/skill" onClick={handleLinkClick}>
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/project" onClick={handleLinkClick}>
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
