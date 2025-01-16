import React from 'react'
import hotel from '../image/hotel.png'
import '../project/project.css';
import emp2 from '../image/emp2.jpeg'

export default function Project() {
  return (
    <div>
<div>
    <h1 className='text-white text-center'  id='pm' style={{backgroundColor:'#8C1515'}}>PROJECT</h1>


</div>



<h1 id='i1' className='text-center'>1</h1>
<div className="card bg-primary">
  <div className="card-body">
    <h1 className="card-title text-white ">Project title:-Employee Management system</h1>
    <h3 className='text-white'>Technology Used</h3>
    <h5 className='text-white'>ReactJS, NodeJS, Express,MongoDB, BootStrap, CSS</h5>
    <p className=" text-white card-text"> 
    The Empolyee Management System is a web-based application designed to manage the operations of a
Empolyee database using MERN Stack. The system allows administrators to perform CRUD (Create, Read,
Update, Delete) operations on Empolyee records.
Technologies: 
</p>
<a id='eh' className='text-primary btn bg-white' href='https://empolyeemanagementsystem.vercel.app/'>go to see on website</a>
  </div>
  
</div>





<h1 id='i2' className='text-center'>2</h1>
<div className="card bg-info">
  <div className="card-body">
    <h1 className="card-title text-white">Project title:-Hotel Management system</h1>
    <h3 className='text-white'>Technology Used</h3>
    <h5 className='text-white'>Java, MySQL, Servlet,JSP,HTML,CSS,BootStrap</h5>
    <p className=" text-white card-text"> 
    Hotel management system is a web based application that allows manager to handle all activity online.This
application gives him power and flexibility to entire system from a single online system.Customer can book
room• and see information about payment and what thing available in hotel.
</p>

<a id='hh' className='text-primary btn bg-white' href='https://github.com/Gyasuddinali/hotelmanagement'>go on github to see</a>
  </div>
  {/* <img src={hotel} className="card-img-bottom" alt="Hotel"/> */}
</div>



    </div>
  )
}
