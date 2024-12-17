// import React from 'react'
// import { FaJava, FaReact } from 'react-icons/fa'
// import exp from '../image/express.png'
// import nodejs from '../image/nodejs.png'
// import css from '../image/css.jpg'
// import mongo from '../image/mongo.webp'
// import c from '../image/c.jpg'
// import cpp from '../image/cpp.png'
// import html from '../image/html.png'
// import javascript from '../image/javascript.png'
// import react from '../image/react.jpg'
// import java from '../image/java.jpg'
// import servlet from '../image/servlet.png'
// import springboot from '../image/spring.png'
// export default function Skill() {
//   return (
//     <div> 
// <h1 className='bg-success text-white'>My Skill</h1>

// <div className="container-fluid row  lg-3">

// <div className='row'>



// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={java} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">JAVA</h4>
//   </div>
//   </div>

//   <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={servlet} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">SERVLET&JSP</h4>
//   </div>
//   </div>

//   <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={css} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">NODEJS</h4>
//   </div>
// </div>

//         <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={javascript} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">JAVASCRIPT</h4>
//   </div>

// </div>
// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={html} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">HTML</h4>
//   </div>
// </div>

//    <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={cpp} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">CPP</h4>
//   </div>
// </div>

// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={springboot} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">SPRING BOOT</h4>
//   </div>
//   </div>
//    <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={c} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">C PROGRAMING</h4>
//   </div>
// </div>

// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={mongo} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">MONGODB</h4>
//   </div>
// </div>

// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={nodejs} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">NODEJS</h4>
//   </div>
// </div>

// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={exp} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">EXPRESSJS</h4>
//   </div>
// </div>

// <div className="card" style={{width:200}}>
//   <img className="card-img-top" src={react} alt="Card image"></img>
//   <div className="card-body">
//     <h4 className="card-title">REACTJS</h4>
//   </div>
// </div>
// </div>
// </div>
//     </div>
//   )
// }












import React from 'react';
import { FaJava, FaReact } from 'react-icons/fa';
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

export default function Skill() {
  return (
    <div>
      <h1 className="bg-success text-white text-center py-4">My Skills</h1>
      
      <div className="container-fluid">
        <div className="row justify-content-center">
          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={java} alt="Java" />
              <div className="card-body">
                <h4 className="card-title text-center">JAVA</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={servlet} alt="Servlet & JSP" />
              <div className="card-body">
                <h4 className="card-title text-center">SERVLET & JSP</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={css} alt="CSS" />
              <div className="card-body">
                <h4 className="card-title text-center">CSS</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={javascript} alt="JavaScript" />
              <div className="card-body">
                <h4 className="card-title text-center">JAVASCRIPT</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={html} alt="HTML" />
              <div className="card-body">
                <h4 className="card-title text-center">HTML</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={cpp} alt="C++" />
              <div className="card-body">
                <h4 className="card-title text-center">C++</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={springboot} alt="Spring Boot" />
              <div className="card-body">
                <h4 className="card-title text-center">SPRING BOOT</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={c} alt="C Programming" />
              <div className="card-body">
                <h4 className="card-title text-center">C PROGRAMMING</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={mongo} alt="MongoDB" />
              <div className="card-body">
                <h4 className="card-title text-center">MONGODB</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={nodejs} alt="NodeJS" />
              <div className="card-body">
                <h4 className="card-title text-center">NODEJS</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={exp} alt="ExpressJS" />
              <div className="card-body">
                <h4 className="card-title text-center">EXPRESSJS</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={react} alt="ReactJS" />
              <div className="card-body">
                <h4 className="card-title text-center">REACTJS</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
