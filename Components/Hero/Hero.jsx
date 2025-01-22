import React from 'react'
import './Hero.css'
import profile_img  from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'





const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src={profile_img} alt=""/>
        <h1><span>I 'm Anuradha Byahut,</span>a software developer </h1>
        <p>I am a frontend Developer with a 2 years of experience in the feild of development</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link'  href='#contact'>Connect with me</AnchorLink>
               </div>
            <div className="hero-resume"> MY Resume</div>
        </div>

    </div>
  )
}

export default Hero