// import React from 'react'
// import { Link,} from 'react-router-dom'
// import '../navbar/navbarcss.css';
// export default function NavbarRoute() {
//   return (
//     <div>

// {/* <div id='nv1' className="container-fluid bg-light ">

// <NavLink className=' float-sm-end float-md-end float-xl-end float-xxl-end' to='/'>Home</NavLink>
// <Link className='float-sm-end float-md-end float-xl-end float-xxl-end'  to='/about'>About</Link>
// <Link className='float-sm-end float-md-end float-xl-end float-xxl-end' to='/skill'>Skill</Link>
// <Link className='float-sm-end float-md-end float-xl-end float-xxl-end' to='/project'>Project</Link>

// </div> */}


// <nav className="navbar navbar-expand-lg " id='iii'>
//       <div className="container">
//         {/* <Link className="navbar-brand" to="/">Home</Link> */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/skill">Skill</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/project">Project</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

// </div>
 
//   )
// }





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
            className="navbar-toggler"
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
                <Link className="nav-link active" aria-current="page" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skill" onClick={handleLinkClick}>
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project" onClick={handleLinkClick}>
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
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
