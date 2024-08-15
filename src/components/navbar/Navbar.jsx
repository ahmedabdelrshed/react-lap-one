import React from 'react'
import icon from '../../icon.png'
import './nav.css'
const Navbar = () => {
  return (
    <div><div class="header">
    <div class="container">
       
        <div class="logo">
            <img src={icon} alt="Logo"/>   
        </div>  
        <div class="links">
        <ul>
        <li><a href="#s2" class="active">Home</a></li>
        <li><a href="#s9">Contact</a></li>
        <li><a href="#s6">About</a></li>
        <li><a href="#s8">products</a></li>
        <li><a href="#s3">Projects</a></li>
        <li><a href="#s4">Services</a></li>
    </ul>
    </div>
    </div>
</div></div>
  )
}

export default Navbar