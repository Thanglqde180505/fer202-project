import React from 'react';
import { assets } from '../assets/assest';
import '../assets/styles/pages/About.css';
import QuantityOfWeb from '../components/QuantityOfWeb';
import Title from '../components/Title';
const About = () => {
  return (
    <div>
      <Title text1={'About'} text2={'Us'} />
      <div className="container d-flex align-items-center justify-content-around gap-3 mb-5">

        <img src={assets.banner_about} alt="this is about banner img" className='w-50' />
        <div className="main-content">
          <p className='content'>
            Welcome to Asin! We are a passionate team dedicated to providing high-quality products that enhance your everyday life. Our journey began with a vision to deliver exceptional value through carefully curated selections and outstanding customer service.

            At Asin, we believe in the power of quality. Each product undergoes rigorous testing to ensure it meets our high standards. We source the finest materials and collaborate with skilled artisans to create items you can trust.

            Our mission is simple: to prioritize your satisfaction. We strive to keep you informed every step of the way, from product selection to delivery. Your confidence in us is paramount, and we stand behind every purchase with a commitment to excellence.

            Thank you for choosing Asin. We look forward to serving you!
          </p>
        </div>
      </div>
      <QuantityOfWeb />
    </div>
  )
}

export default About
