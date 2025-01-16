// src/components/Header.js
import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div >
   {/* "homepage": "https://Gyasuddinali.github.io/portfolio", */}

      <nav className="navbar navbar-expand navbar-light bg-light">
  <div  className="container ">
    
    {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/skill">Skill</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
      </ul>
    {/*</div>*/}
  </div>
</nav>







    </div>
  );
};

export default Header;
