// import gyasu from '../image/gyasu.pdf'
// import image1 from '../image/img.jpg';
// import React from 'react'
// import '../contact/contact.css';
// import { FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'

// export default function Home() {
//   return (
//     <div>

      
//      <div>  <h1 id='gh' className='container'>MY NAME IS GYASUDDIN ALI</h1>
//      </div>
 
  
    
//     <div id='bg' className="container">
      


// <img id='img2' className='container-fluid  img-fluid rounded-circle float-sm-start float-md-start float-xl-start float-xxl-start' src={image1} alt="logo" />
// <h2 id='move' className='text-center   '>I AM SOFTWARE DEVOLOPER,MERN STACK DEVOLOPER</h2>


// {/* <div className='container float-sm-end float-md-end float-xl-end float-xxl-end'> */}
// <p id='ad' className='container' ><FaWhatsapp></FaWhatsapp><FaPhone></FaPhone>9199245536</p>
// <h5 className='text-center'>Email</h5><p className='text-center'>gyasuddinali0786@gmail.com</p>
// <h5>Address</h5><pre className='text-bold'>Siwan,Bihar</pre>
// {/* </div> */}
// {/* <div id='link' className='float-sm-end float-md-end float-xl-end float-xxl-end'> */}
// <a  href="https://www.facebook.com/gyasusrkian91992"><FaFacebook className='fs-1  '/></a>
// <a  href='https://www.instagram.com/iam_gyasu/'><FaInstagram className='fs-1 ' /></a>
// <a  href='https://github.com/Gyasuddinali'><FaGithub className='fs-1 '></FaGithub></a>
// <a  href='https://x.com/iamgyasu'><FaTwitter className='fs-1 '/></a>
// {/* </div> */}
// <a className='btn btn-primary' href={gyasu}>View my resume</a>



// </div>


//     </div>
//   )
// }









import gyasu from '../image/gyasu.pdf';
import image1 from '../image/img.jpg';
import React from 'react';
import '../contact/contact.css';
import { FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <div>
        <h1 id="gh" className="container text-center py-4">MY NAME IS GYASUDDIN ALI</h1>
      </div>

      <div id="bg" className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-12 col-md-4 text-center mb-4">
            <img
              id="img2"
              className="img-fluid rounded-circle"
              src={image1}
              alt="profile"
              style={{ maxWidth: '250px', height: 'auto' }}
            />
          </div>

          {/* Text and Contact Info */}
          <div className="col-12 col-md-8">
            <h2 id="move" className="text-center">
              I AM SOFTWARE DEVELOPER, MERN STACK DEVELOPER
            </h2>

            <p id="ad" className="d-flex align-items-center justify-content-center mb-3">
              <FaWhatsapp className="me-2" /> <FaPhone className="me-2" /> 9199245536
            </p>

            <h5 className="text-center">Email</h5>
            <p className="text-center">gyasuddinali0786@gmail.com</p>

            <h5>Address</h5>
            <pre className="text-bold">Siwan, Bihar</pre>

            <div className="text-center my-3">
              <a
                href="https://www.facebook.com/gyasusrkian91992"
                className="fs-2 mx-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/iam_gyasu/"
                className="fs-2 mx-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Gyasuddinali"
                className="fs-2 mx-2"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/iamgyasu"
                className="fs-2 mx-2"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="text-center">
              <a className="btn btn-primary" href={gyasu}>
                View my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
