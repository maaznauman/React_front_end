import React from 'react'
import './Landingpagebody.css'
import image from '../assets/image.png'


export const Landingpagebody = () => {
  return (
    <div className='mainbody'>
    <div className='upperbody'>
    <div className='maintext'>
      <h1>We help you with your
         <span className='highlighted'> WebApp</span>
          <br/>
          <span className='highlighted'>Website </span> 
          and
           <span className='highlighted'> Mobile Apps</span></h1>

      <p>Got any similar projects to discuss ?</p><br/>
      <a href='#' class="button">Lets Connect</a>
      

    </div>

    <div className='imageinsert'>
     <img src={image} alt="My Image" class="image"/>
    </div>

    </div>

    <div className='lowerbody'>
      <p className='features'>Our Features</p>

    </div>

    </div>
    

  

    
  )
}
