
import gyasu from '../image/gyasuddin.pdf';
import image1 from '../image/img.jpg';
import React from 'react';
import '../contact/contact.css';
import { FaEnvelope, FaFacebook,FaLinkedin, FaGithub, FaHome, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const number = "+919199245536";
  //const whatsappNumber = "+1234567890";
  const message = "Hello! Gyasuddin";

  const redirectToWhatsApp = () => {
    window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const CallingMe = () => {
    window.location.href = `tel:${number}`;
  };
  return (
    <div >
      <div>
        {/* <h1 id="gh" className="container-fluid text-center py-4">MY NAME IS GYASUDDIN ALI</h1> */}
      </div>
      <h1 className='text-white text-center pt-2' style={{backgroundColor:'#8C1515',height:'60px'}}>WELCOME TO PORTFOLIO</h1>
      <div id="bg" className="card container shadow-dark mt-5 mb-5">
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
            <h2 id="move" className="text-center mt-5 text-dark">
            MY NAME IS GYASUDDIN ALI.
             I AM JAVA DEVELOPER, MERN STACK DEVELOPER
            </h2>

            <p onClick={redirectToWhatsApp} id="ad" className="d-flex align-items-center text-dark justify-content-center mb-3">
             <p> <FaWhatsapp className="me-2" />whatsApp Now</p>
            </p>
            <p onClick={CallingMe} className="align-items-center text-dark"><FaPhone className="me-2" />Call Me Now 9199245536</p>
            <h5 className="text-center text-dark"><FaEnvelope></FaEnvelope>Email</h5>
            <p className="text-center text-dark"> <a href="mailto:gyasuddinali0786@gmail.com" className="text-dark">gyasuddinali0786@gmail.com</a></p>
           
            <h5 className="text-dark"><FaHome></FaHome>Home Town Address</h5>
            <pre className="text-bold text-dark">Siwan, Bihar</pre>

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
              <a href="https://www.linkedin.com/in/gyasuddin-ali-243194258/" className="fs-2 mx-2"><FaLinkedin/> </a>
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
