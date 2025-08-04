// src/components/Contact.js
import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contactme = () => {

  const [name,setName]=useState({
    //id:"",
    name:"",
    email:"",
  message:""
  });

  const inpcng=(e)=>{
   

const value1=e.target.value;
const name1=e.target.name;
setName({...name,[name1]:value1
});
}

const buttonhnd=async(e1)=>{
  e1.preventDefault();

  fetch("https://portfolioback-nu.vercel.app/", {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name),
  })
    .then((res) => res.json())
    .then((data) => {
      
        //alert("we will contact  you soon");
      toast.success("we will contct you very shortly! Have a good day",{

        position:"top-center"
      })
    })

  
console.log(name);
}

  return (
    <div>
            <h1 className=' text-center pt-2' style={{color:'#d4af37',backgroundColor:'#0b3d2e',height:'60px'}}>Contact Me</h1>

      {/* <h1 className='text-white text-center py-3 m-3' style={{backgroundColor:'#8C1515',height:'60px'}}>Contact Me</h1> */}
      <div id="frm" className="card container mt-5 mb-5 pt-5 pb-5 ps-5 pe-5">
      <form className='container ps-5 pe-5 card pt-5 pb-5 align-center ' onSubmit={buttonhnd}>
        <input type="text" placeholder="Your Name" required name='name' value={name.name} onChange={inpcng}/><br></br>
        <input type="email" placeholder="Your Email" required name='email' p value={name.email} onChange={inpcng}/><br></br>
        <textarea placeholder="Your Message" required name='message'  value={name.message} onChange={inpcng} ></textarea><br></br>
        <button className="btn bg-primary text-white" type="submit">Send</button>
      </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Contactme;
