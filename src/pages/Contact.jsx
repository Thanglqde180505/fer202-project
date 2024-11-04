import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assest';
import '../assets/styles/pages/Contact.css';
import FormContact from '../components/form/FormContact';

const Contact = () => {
  return (
    <div>
      <Title text1={'contact'} text2={'us'} />
      <div className='container d-flex align-items-center justify-content-center gap-3'>
        <img src={assets.banner_contact} alt="this is banner web" />
        <div className='wrapper-content-contact'>
          <p className='content-contact'>
            At Asin, we value your feedback and inquiries. If you have any questions, concerns, or suggestions, please feel free to reach out to us.
            Our dedicated customer support team is here to assist you.◊
          </p>
          <div className='d-flex align-items-center justify-content-around'>
            <div className='d-flex flex-column'>
              <div className='text-intro-contact'>
                <b>Get in Touch</b>
                <div className="line"></div>
              </div>

              <span><i className="fa-regular fa-envelope"></i> Email: <b> youraddressemail@gmail.com</b></span>
              <span><i className="fa-solid fa-phone"></i> PhoneNumber: <b> 0123456789</b></span>
              <span><i className="fa-solid fa-location-dot"></i>Address: <b> youraddress</b></span>
            </div>
            <div className='d-flex flex-column'>
            <div className='text-intro-contact'>
                <b>Business Hours</b>
                <div className="line"></div>
              </div>
              <span><b>Monday to Friday:</b> 9:00 AM - 6:00 PM</span>
              <span><b>Saturday:</b> 10:00 AM - 4:00 PM</span>
              <span><b>Sunday:</b> Closed</span>
            </div>
          </div>
        </div>
      </div>
      <FormContact/>
    </div>
  )
}

export default Contact
