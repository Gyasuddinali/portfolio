// import React from 'react'

// import '../project/project.css';

// import { FaGoogle } from 'react-icons/fa6';
// import { FaGithub } from 'react-icons/fa';

// export default function Project() {
//   return (
//     <div>
// <div >
//     <h1 className='text-white text-center pt-2' style={{backgroundColor:'#8C1515',height:'60px'}}>PROJECT</h1>


// </div>



// <h1 id='i1' className='text-center container mt-5'>1</h1>
// <div id='c1' className="card container bg-primary">
//   <div className="card-body">
//     <h1 className="card-title text-dark ">Project title:-Employee Management system</h1>
//     <h3 className='text-dark'>Technology Used</h3>
//     <h5 className='text-dark'>ReactJS, NodeJS, Express,MongoDB, BootStrap, CSS</h5>
//     <p className=" text-dark card-text"> 
//     The Empolyee Management System is a web-based application designed to manage the operations of a
// Empolyee database using MERN Stack. The system allows administrators to perform CRUD (Create, Read,
// Update, Delete) operations on Empolyee records.
// Technologies: 
// </p>
// <a id='eh' className='text-primary btn bg-white w-25' href='https://employeemanagefront.vercel.app/'><FaGoogle></FaGoogle></a>
//   </div>
  
// </div>





// <h1 id='i2' className='text-center container mt-5'>2</h1>
// <div id='c1' className="card container bg-info">
//   <div className="card-body">
//     <h1 className="card-title text-dark">Project title:-Hotel Management system</h1>
//     <h3 className='text-dark'>Technology Used</h3>
//     <h5 className='text-dark'>Java, MySQL, Servlet,JSP,HTML,CSS,BootStrap</h5>
//     <p className=" text-dark card-text"> 
//     Hotel management system is a web based application that allows manager to handle all activity online.This
// application gives him power and flexibility to entire system from a single online system.Customer can book
// room• and see information about payment and what thing available in hotel.
// </p>

// <a id='hh' className='text-primary btn bg-white w-25' href='https://github.com/Gyasuddinali/hotelmanagement'><FaGithub></FaGithub></a>
//   </div>

// </div>



// <h1 id='i2' className='text-center container mt-5'>3</h1>
// <div id='c1' className="card container bg-info">
//   <div className="card-body">
//     <h1 className="card-title text-dark">Project title:-OneStopService</h1>
//     <h3 className='text-dark'>Technology Used</h3>
//     <h5 className='text-dark'>ReactJS, NodeJS, Express,MongoDB, BootStrap, CSS</h5>
//     <p className=" text-dark card-text"> 
//    This project is a comprehensive service solution designed to simplify everyday life
//     for homeowners and small businesses. It offers a wide range of services including 
//     home painting, home appliance repairs and installation, residential and commercial
//     cleaning, and custom web development—all accessible through a single platform.

// </p>

// <a id='hh' className='text-primary btn bg-white w-25' href='https://onestopservice.vercel.app/'><FaGoogle></FaGoogle></a>
//   </div>

// </div>
// <h1 id='i2' className='text-center container mt-5 '>4</h1>

// <div id='c1' className="card container bg-info">
//   <div className="card-body">
//     <h1 className="card-title text-dark">Project title:-ShamsCart</h1>
//     <h3 className='text-dark'>Technology Used</h3>
//     <h5 className='text-dark'>ReactJS, NodeJS, Express,MongoDB, BootStrap,JWT, CSS</h5>
//     <p className=" text-dark card-text"> 
//  Built a responsive, full-featured eCommerce web application inspired by JioMart, offering product browsing,
//  dynamic search, shopping cart, checkout, user authentication, and order tracking. The project replicates key real
// world features of large-scale online retail platforms, with a focus on performance, scalability, and clean UI/UX
// </p>

// <a id='hh' className='text-primary btn bg-white w-25' href='https://shamscart.vercel.app/'><FaGoogle></FaGoogle></a>
//   </div>

// </div>
//     </div>
//   )
// }









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
      description: "The Empolyee Management System is a web-based application designed to manage the operations of a Empolyee database using MERN Stack. The system allows administrators to perform CRUD (Create, Read, Update, Delete) operations on Empolyee records Technologies:",
      link: "https://employeemanagefront.vercel.app/",
      icon: <FaGoogle />,
    },
    {
      id: 2,
      title: "Hotel Management System",
      tech: "Java, MySQL, Servlet, JSP, HTML, CSS, Bootstrap",
      description: " Hotel management system is a web based application that allows manager to handle all activity online.This application gives him power and flexibility to entire system from a single online system.Customer can book room• and see information about payment and what thing available in hotel.",
      link: "https://github.com/Gyasuddinali/hotelmanagement",
      icon: <FaGithub />,
    },
    {
      id: 3,
      title: "OneStopService",
      tech: "ReactJS, NodeJS, Express, MongoDB, Bootstrap, CSS",
      description: "This project is a comprehensive service solution designed to simplify everyday life for homeowners and small businesses. It offers a wide range of services including home painting, home appliance repairs and installation, residential and commercial cleaning, and custom web development—all accessible through a single platform.",
      link: "https://onestopservice.vercel.app/",
      icon: <FaGoogle />,
    },
    {
      id: 4,
      title: "ShamsCart",
      tech: "ReactJS, NodeJS, Express, MongoDB, Bootstrap, JWT, CSS",
      description: "Built a responsive, full-featured eCommerce web application inspired by JioMart, offering product browsing dynamic search, shopping cart, checkout, user authentication, and order tracking. The project replicates key reaworld features of large-scale online retail platforms, with a focus on performance, scalability, and clean UI/UX",
      link: "https://shamscart.vercel.app/",
      icon: <FaGoogle />,
    },
  ];

  return (
    <div className="project-wrapper">
      {/* <h1 className="project-header">PROJECTS</h1> */}
                  <h1 className="text-center pt-2" style={{color:'#d4af37',backgroundColor:'#0b3d2e',height:'60px'}}>PROJECTS</h1>

      {projects.map((proj, index) => (
        <div className="project-card fade-in-up" key={proj.id}>
          <h2 className="project-index">#{proj.id}</h2>
          <div className="project-content">
            <h3>{proj.title}</h3>
            <h5><strong>Tech Used:</strong> {proj.tech}</h5>
            <p>{proj.description}</p>
            <a className="project-link" href={proj.link} target="_blank" rel="noreferrer">
              {proj.icon}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

