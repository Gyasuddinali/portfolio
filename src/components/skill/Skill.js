
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
import '../skill/skill.css'

export default function Skill() {
 
  return (
    <div>
      {/* <h1 className=" text-white text-center py-3  m-3" style={{backgroundColor:'#8C1515',height:'60px'}}>My Skills</h1> */}
            <h1 className="text-center pt-2" style={{color:'#d4af37',backgroundColor:'#0b3d2e',height:'60px'}}>My Skills</h1>

      <div id='ptex' className="container card mt-5 mb-5">
        <div className="row justify-content-center mt-5 mb-5">
          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="fade">
            <div className="card">
              <img className="card-img-top" src={java} alt="Java" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">JAVA</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="slide-up">
            <div className="card">
              <img className="card-img-top" src={servlet} alt="Servlet & JSP" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">SERVLET & JSP</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="fade">
            <div className="card">
              <img className="card-img-top" src={css} alt="CSS" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">CSS</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="slide-right">

            <div className="card">
              <img className="card-img-top" src={javascript} alt="JavaScript" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">JAVASCRIPT</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in">
            <div className="card">
              <img className="card-img-top" src={html} alt="HTML" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">HTML</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-out">
            <div className="card">
              <img className="card-img-top" src={cpp} alt="C++" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">C++</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in-right"
>
            <div className="card">
              <img className="card-img-top" src={springboot} alt="Spring Boot" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">SPRING BOOT</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="slide-down">
            <div className="card">
              <img className="card-img-top" src={c} alt="C Programming" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">C PROGRAMMING</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="flip-left">
            <div className="card">
              <img className="card-img-top" src={mongo} alt="MongoDB" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">MONGODB</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="fade-up-left">
            <div className="card">
              <img className="card-img-top" src={nodejs} alt="NodeJS" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">NODEJS</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="fade-up-right">
            <div className="card">
              <img className="card-img-top" src={exp} alt="ExpressJS" style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h4 className="card-title text-center">EXPRESSJS</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-out-right">
            <div className="card">
              <img className="card-img-top" src={react} alt="ReactJS" style={{ height: '300px', objectFit: 'cover' }}/>
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
