// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div>
   {/* "homepage": "https://Gyasuddinali.github.io/portfolio", */}

      <nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container">
    
    {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active"  href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skill">Skill</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        
      </ul>
    {/*</div>*/}
  </div>
</nav>







    </div>
  );
};

export default Header;
