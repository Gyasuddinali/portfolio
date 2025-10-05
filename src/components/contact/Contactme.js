// src/components/Contact.js
import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../contact/contact.css'
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
    <div className="contact-wrapper">
      <h1 className="contact-header">Contact Me</h1>

      <div className="contact-card container shadow-sm">
        <form className="contact-form" onSubmit={buttonhnd} noValidate>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
            value={name.name}
            onChange={inpcng}
            className="contact-input"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            value={name.email}
            onChange={inpcng}
            className="contact-input"
          />

          <textarea
            placeholder="Your Message"
            required
            name="message"
            value={name.message}
            onChange={inpcng}
            className="contact-textarea"
            rows={5}
          />

          <button type="submit" className="contact-btn">
            Send
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}
export default Contactme;

