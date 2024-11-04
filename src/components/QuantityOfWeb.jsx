import React from 'react';
import { assets } from '../assets/assest';
import '../assets/styles/components/QuantityOfWeb.css';

const QuantityOfWeb = () => {
  const titleQuantity = [
    'At Asin, we guarantee high-quality products through rigorous testing and the finest materials. Your satisfaction is our priority. Thank you for choosing us!',
    'At Asin, we ensure high-quality products with rigorous testing. We also prioritize timely delivery, keeping you updated every step of the way. Your satisfaction is our top priority!',
    'At Asin, we prioritize your security with safe and reliable payment options. Our systems are designed to protect your information, ensuring a smooth and secure transaction process. Shop with confidence!',
  ];

  return (
    <div className='container d-flex align-items-center justify-content-center gap-3 mt-5 mb-5'>
      <div className='wrapper-quantity row'>
        {titleQuantity.map((item, index) => (
          <div className="item-quantity col-md-3" key={index}>
            <img src={assets[`quantity${index + 1}`]} alt="this is title about quantity of web" className='w-50' />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuantityOfWeb;
