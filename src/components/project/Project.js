import React from 'react'

import '../project/project.css';

import { FaGoogle } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  return (
    <div>
<div >
    <h1 className='text-white text-center pt-2' style={{backgroundColor:'#8C1515',height:'60px'}}>PROJECT</h1>


</div>



<h1 id='i1' className='text-center container mt-5'>1</h1>
<div id='c1' className="card container bg-primary">
  <div className="card-body">
    <h1 className="card-title text-dark ">Project title:-Employee Management system</h1>
    <h3 className='text-dark'>Technology Used</h3>
    <h5 className='text-dark'>ReactJS, NodeJS, Express,MongoDB, BootStrap, CSS</h5>
    <p className=" text-dark card-text"> 
    The Empolyee Management System is a web-based application designed to manage the operations of a
Empolyee database using MERN Stack. The system allows administrators to perform CRUD (Create, Read,
Update, Delete) operations on Empolyee records.
Technologies: 
</p>
<a id='eh' className='text-primary btn bg-white w-25' href='https://employeemanagefront.vercel.app/'><FaGoogle></FaGoogle></a>
  </div>
  
</div>





<h1 id='i2' className='text-center container mt-5'>2</h1>
<div id='c1' className="card container bg-info">
  <div className="card-body">
    <h1 className="card-title text-dark">Project title:-Hotel Management system</h1>
    <h3 className='text-dark'>Technology Used</h3>
    <h5 className='text-dark'>Java, MySQL, Servlet,JSP,HTML,CSS,BootStrap</h5>
    <p className=" text-dark card-text"> 
    Hotel management system is a web based application that allows manager to handle all activity online.This
application gives him power and flexibility to entire system from a single online system.Customer can book
room• and see information about payment and what thing available in hotel.
</p>

<a id='hh' className='text-primary btn bg-white w-25' href='https://github.com/Gyasuddinali/hotelmanagement'><FaGithub></FaGithub></a>
  </div>

</div>



<h1 id='i2' className='text-center container mt-5'>3</h1>
<div id='c1' className="card container bg-info">
  <div className="card-body">
    <h1 className="card-title text-dark">Project title:-instentRepaire Services</h1>
    <h3 className='text-dark'>Technology Used</h3>
    <h5 className='text-dark'>ReactJS, NodeJS, Express,MongoDB, BootStrap, CSS</h5>
    <p className=" text-dark card-text"> 
    instentRepaire Services is an online platform designed to connect users with reliable repair services. Whether it's fixing household appliances, electronics, or other equipment, our website helps you find skilled technicians in your area.
    Schedule an appointment with just a few clicks. Select the service you need, and book works for you.
</p>

<a id='hh' className='text-primary btn bg-white w-25' href='https://instentrepaire.vercel.app//'><FaGoogle></FaGoogle></a>
  </div>

</div>
    </div>
  )
}
