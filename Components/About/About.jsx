import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img  from '../../assets/profile_img.svg'


const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about'></div>
    <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a frontend Developer with a 2 years of experience in the feild of development</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>html& CSS</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>javascript</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>nextjs</p> <hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-acheivements">
        <div className="about-acheivement">
            <h1>10+</h1>
            <p> Year of experience</p>
        </div>
        <hr />
        <div className="about-acheivement">
            <h1>90+</h1>
            <p> Year of experience</p>
        </div>
        <hr />
        <div className="about-acheivement">
        <h1>80+</h1>
            <p> Year of experience</p>
        </div>
        <hr />
        </div>
        </div>
  )
}

export default About