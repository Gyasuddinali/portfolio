import React from 'react'
import { Link,} from 'react-router-dom'
import '../navbar/navbarcss.css';
export default function NavbarRoute() {
  return (
    <div>

{/* <div id='nv1' className="container-fluid bg-light ">

<NavLink className=' float-sm-end float-md-end float-xl-end float-xxl-end' to='/'>Home</NavLink>
<Link className='float-sm-end float-md-end float-xl-end float-xxl-end'  to='/about'>About</Link>
<Link className='float-sm-end float-md-end float-xl-end float-xxl-end' to='/skill'>Skill</Link>
<Link className='float-sm-end float-md-end float-xl-end float-xxl-end' to='/project'>Project</Link>

</div> */}


<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skill">Skill</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</div>
 
  )
}

