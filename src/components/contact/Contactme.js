// src/components/Contact.js
import React from 'react';
import { useState } from 'react';
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
      
        alert("we will contact you soon");
      
    })

  
console.log(name);
}

  return (
    <div id="frm">
      <h1 className='bg-info text-white text-center'>Contact Me</h1>
      <form className='container' onSubmit={buttonhnd}>
        <input type="text" placeholder="Your Name" required name='name' value={name.name} onChange={inpcng}/><br></br>
        <input type="email" placeholder="Your Email" required name='email' p value={name.email} onChange={inpcng}/><br></br>
        <textarea placeholder="Your Message" required name='message'  value={name.message} onChange={inpcng} ></textarea><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contactme;
