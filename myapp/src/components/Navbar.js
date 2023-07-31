import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
   
       <nav className="main-nav" >

        <div className='logo'>
        <img src={logo} alt="My Image" />
        </div>

        <div className="menubuttons">
           <ul>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Blogs</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Contact us</a></li>
          
                </ul> 
        </div>
        
       



       </nav>
   
  )
}
