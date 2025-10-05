import React from 'react';
import '../about/about.css';

export default function About() {
  return (
    <div style={{ backgroundColor: '#0b3d2e', padding: '10px 20px', minHeight: '100vh' }}>

        <h1 className="about-header">About Me</h1>
    

      <div className="about-card container shadow-sm mx-auto">
        <p>
          Hi, I'm <strong>Gyauddin Ali</strong>, a fresher MCA postgraduate with a deep passion for Java development, MERN stack, and software development. I have a strong foundation in Java, C, C++, Spring Boot, JSP, Servlets, HTML, CSS, ReactJS, ExpressJS, NodeJS, MongoDB, and MySQL.
        </p>

        <p>
          I take pride in my ability to solve complex problems and am always eager to embrace new challenges that help me grow. Whether working independently or collaborating with a team, I am committed to delivering results that exceed expectations.
        </p>

        <p>
          Feel free to explore my work, and let's connect if you're looking for someone who can apply my programming and software development knowledge to solve real-world problems.
        </p>
      </div>
    </div>
  );
}
