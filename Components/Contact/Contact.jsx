import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
      

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b2c8bf71-d83e-4fd7-b472-b3fbd562f154");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    

    return (
        <div  id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm Currently available to take on new project so feel free to talk me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>anukitbyahutanu@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>India</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>7054034732</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                   <label htmlfor="" >Your Name</label>
                   <input type="text" placeholder="Enter your Name" name='name' />
                   <label htmlfor="" >Your Email</label>
                   <input type="email" placeholder="Enter your email" name='email' />
                   <label htmlfor="" > Write Your message here</label>
                   <textarea name='message' rows='8' placeholder='Enter Your Message'></textarea>
                   <button type='submit' className="contact-submit">Submit New</button>
                </form>
            </div>

        </div>
    )
}

export default Contact