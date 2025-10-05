


import React from 'react';
import gyasu from '../image/gyasuddin.pdf';
import image1 from '../image/img.jpg';
import './Home.css';

import {
  FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaHome,
  FaInstagram, FaPhone, FaTwitter, FaWhatsapp
} from 'react-icons/fa';

export default function Contact() {
  const number = "+919199245536";
  const message = "Hello! Gyasuddin";

  const redirectToWhatsApp = () => {
    window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const CallingMe = () => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="contact-container">
      {/* === Modern Header Section === */}
        <h1 className="hero-title">
          WELCOME
        </h1>
     

      {/* === Profile Card === */}
      <div className="glass-card container mt-5 shadow-lg">
        <div className="row align-items-center">
          {/* === Profile Image === */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={image1}
              alt="Gyasuddin Ali"
              className="profile-img"
            />
          </div>

          {/* === Text & Links Section === */}
          <div className="col-md-8 text-center text-md-start">
            <h2 className="name-heading">Gyasuddin Ali</h2>
            <p className="text-muted mb-3">Java Developer | MERN Stack Developer</p>

            <div className="d-flex flex-wrap justify-content-center justify-content-md-start mb-3">
              <button onClick={redirectToWhatsApp} className="btn-glass me-3 mb-2">
                <FaWhatsapp className="me-2" /> WhatsApp
              </button>
              <button onClick={CallingMe} className="btn-glass mb-2">
                <FaPhone className="me-2" /> Call
              </button>
            </div>

            <div className="contact-info mb-3">
              <p><FaEnvelope className="me-2" />
                <a href="mailto:gyasuddinali0786@gmail.com">gyasuddinali0786@gmail.com</a>
              </p>
              <p><FaHome className="me-2" /> Siwan, Bihar</p>
            </div>

            {/* === Social Media Icons === */}
            <div className="social-icons my-4">
              <a href="https://www.facebook.com/gyasusrkian91992" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/iam_gyasu/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://github.com/Gyasuddinali" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://x.com/iamgyasu" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/gyasuddin-ali-243194258/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>

            <div className="text-center text-md-start">
              <a href={gyasu} className="btn-resume" target="_blank" rel="noopener noreferrer">
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
