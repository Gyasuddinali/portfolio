// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../navbar/navbarcss.css';

// export default function NavbarRoute() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleToggle = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleLinkClick = () => {
//     setIsNavOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg fixed-top custom-navbar" id="iii">
//       <div className="container">
//         <Link className="navbar-brand text-white fw-bold" to="/">
//           MyPortfolio
//         </Link>
//         <button
//           className="navbar-toggler bg-white"
//           type="button"
//           onClick={handleToggle}
//           aria-controls="navbarNav"
//           aria-expanded={isNavOpen ? 'true' : 'false'}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {['Home', 'About', 'Skill', 'Project', 'Contact'].map((item) => (
//               <li className="nav-item" key={item}>
//                 <Link
//                   className="nav-link text-white"
//                   to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
//                   onClick={handleLinkClick}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
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
    <div  className="container-fluid" style={{backgroundColor:' #0b3d2e'}}>
      <nav className="navbar navbar-expand-lg" id="iii">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/" style={{color:'#d4af37'}}>
          MY PORTFOLIO
         </Link>
          <button
            className="navbar-toggler mt-2 btn-white bg-white"
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