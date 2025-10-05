

// import React from 'react';
// import '../skill/skill.css';
// import {
//   FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase
// } from 'react-icons/fa';

// import exp from '../image/express.png';
// import nodejs from '../image/nodejs.png';
// import css from '../image/css.jpg';
// import mongo from '../image/mongo.webp';
// import c from '../image/c.jpg';
// import cpp from '../image/cpp.png';
// import html from '../image/html.png';
// import javascript from '../image/javascript.png';
// import react from '../image/react.jpg';
// import java from '../image/java.jpg';
// import servlet from '../image/servlet.png';
// import springboot from '../image/spring.png';

// const skills = [
//   { name: 'Java', image: java },
//   { name: 'Servlet & JSP', image: servlet },
//   { name: 'CSS', image: css },
//   { name: 'JavaScript', image: javascript },
//   { name: 'HTML', image: html },
//   { name: 'C++', image: cpp },
//   { name: 'Spring Boot', image: springboot },
//   { name: 'C Programming', image: c },
//   { name: 'MongoDB', image: mongo },
//   { name: 'NodeJS', image: nodejs },
//   { name: 'ExpressJS', image: exp },
//   { name: 'ReactJS', image: react },
// ];

// export default function Skill() {
//   return (
//     <div className="skill-container">
//       <h1 className="skill-heading text-center">🚀 My Skills</h1>

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           {skills.map((skill, index) => (
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
//               <div className="skill-card shadow-sm">
//                 <img src={skill.image} alt={skill.name} className="rounded-circle skill-img" />
//                 <h5 className="skill-title text-center mt-3">{skill.name}</h5>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





































import React from 'react';
import exp from '../image/express.png';
import nodejs from '../image/nodejs.png';
import css from '../image/css.jpg';
import mongo from '../image/mongo.webp';
import c from '../image/c.jpg';
import cpp from '../image/cpp.png';
import html from '../image/html.png';
import javascript from '../image/javascript.png';
import react from '../image/react.jpg';
import java from '../image/java.jpg';
import servlet from '../image/servlet.png';
import springboot from '../image/spring.png';
import '../skill/skill.css';

const skills = [
  { name: 'JAVA', img: java },
  { name: 'SERVLET & JSP', img: servlet },
  { name: 'CSS', img: css },
  { name: 'JAVASCRIPT', img: javascript },
  { name: 'HTML', img: html },
  { name: 'C++', img: cpp },
  { name: 'SPRING BOOT', img: springboot },
  { name: 'C PROGRAMMING', img: c },
  { name: 'MONGODB', img: mongo },
  { name: 'NODEJS', img: nodejs },
  { name: 'EXPRESSJS', img: exp },
  { name: 'REACTJS', img: react },
];

export default function Skill() {
  return (
    <div style={{ backgroundColor: '#0b3d2e', padding: '10px 20px', minHeight: '100vh' }}>
      <h1 className="skill-header"
       
      >
        My Skills
      </h1>

      <div 
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {skills.map(({ name, img }) => (
          <div
            key={name}
            className="skill-card"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
            }}
          >
            <img
              src={img}
              alt={name}
              style={{
                width: '140px',
                height: '140px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '20px',
                boxShadow: '0 0 12px #d4af37',
              }}
            />
            <h3
              style={{
                color: '#d4af37',
                fontWeight: '700',
                fontSize: '1.5rem',
                textShadow: '0 0 4px #d4af37',
                textAlign: 'center',
                margin: 0,
              }}
            >
              {name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}


