

import React from 'react';
import '../project/project.css';
import { FaGoogle } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      tech: "ReactJS, NodeJS, Express, MongoDB, Bootstrap, CSS",
      description: "A web-based app to manage employee records with full CRUD functionality using the MERN stack.",
      link: "https://employeemanagefront.vercel.app/",
      icon: <FaGoogle />,
    },
    {
      id: 2,
      title: "Hotel Management System",
      tech: "Java, MySQL, Servlet, JSP, HTML, CSS, Bootstrap",
      description: "Web app that allows managers to control hotel activities online, including room bookings and payments.",
      link: "https://github.com/Gyasuddinali/hotelmanagement",
      icon: <FaGithub />,
    },
    {
      id: 3,
      title: "OneStopService",
      tech: "ReactJS, NodeJS, Express, MongoDB, Bootstrap, CSS",
      description: "A platform offering home repair, cleaning, and custom web development services in one place.",
      link: "https://onestopservice.vercel.app/",
      icon: <FaGoogle />,
    },
    {
      id: 4,
      title: "ShamsCart",
      tech: "ReactJS, NodeJS, Express, MongoDB, Bootstrap, JWT, CSS",
      description: "Responsive eCommerce site inspired by JioMart with search, cart, authentication, and order tracking.",
      link: "https://shamscart.vercel.app/",
      icon: <FaGoogle />,
    },
  ];

  return (
    <div className="project-wrapper">
      <h1 className="project-header">PROJECTS</h1>

      <div className="project-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id} tabIndex="0" aria-label={`Project ${proj.title}`}>
            <div className="project-index">#{proj.id}</div>

            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>

              <div className="tech-badges">
                {proj.tech.split(',').map((techItem, idx) => (
                  <span className="tech-badge" key={idx}>
                    {techItem.trim()}
                  </span>
                ))}
              </div>

              <p className="project-description">{proj.description}</p>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Visit ${proj.title} project`}
              >
                {proj.icon}
                <span className="link-text">View Project</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
