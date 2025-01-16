import React from 'react';
import Home from '../components/header/Home';
import About from '../components/about/About';
import Skill from '../components/skill/Skill';
import Project from '../components/project/Project';
import Contactme from '../components/contact/Contactme';

const AllPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contactme />
    </div>
  );
};

export default AllPage;
