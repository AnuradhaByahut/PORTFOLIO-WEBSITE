import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'


const footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo}alt="" />
                <p>i am a fronted developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email"></input>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
         <hr />
         <div className="footer-bottom">
            <p className="footer-bottom-left">
                kdjelfjekjkdnkfd
            </p>
            <div className="footer-bottom-right">
                <p>Terms of SErvices</p>
                <p>privacy policy</p>
                <p>connect with me</p>
            </div>
         </div>
    </div>
  )
}

export default footer
