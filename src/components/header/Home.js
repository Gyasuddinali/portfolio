import gyasu from '../image/gyasu.pdf'
import image1 from '../image/img.jpg';
import React from 'react'
import '../contact/contact.css';
import { FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter, FaVoicemail, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>

      
     <div>  <h1 id='gh' className='container-fluid'>MY NAME IS GYASUDDIN ALI</h1>
     </div>
 
  
    
    <div id='bg' className='container-fluid '>
      <di>
<img id='img2' className='container-fluid  img-fluid rounded-circle float-sm-start float-md-start float-xl-start float-xxl-start' src={image1} alt="logo" />
<h2 id='move' className='text-center container-fluid '>I AM JAVA DEVOLOPER,MERN STACK DEVOLOPER</h2>

</di>
<div className='container-fluid float-sm-end float-md-end float-xl-end float-xxl-end'>
<p id='ad' className='container-fluid'><FaWhatsapp></FaWhatsapp><FaPhone></FaPhone>9199245536</p>
<h5>Email<p>gyasuddinali0786@gmail.com</p></h5>
<h5>Address</h5><pre className='text-bold'>Siwan,Bihar</pre>
</div>
<div className='container-fluid float-sm-end float-md-end float-xl-end float-xxl-end'>
<a  href="https://www.facebook.com/gyasusrkian91992"><FaFacebook className='fs-1'/></a>
<a  href='https://www.instagram.com/iam_gyasu/'><FaInstagram className='fs-1' /></a>
<a  href='https://github.com/Gyasuddinali'><FaGithub className='fs-1'></FaGithub></a>
<a  href='https://x.com/iamgyasu'><FaTwitter className='fs-1'/></a>

<a className='btn btn-primary float-sm-end float-md-end float-xl-end float-xxl-end' href={gyasu}>View my resume</a>
</div>
</div>


    </div>
  )
}
