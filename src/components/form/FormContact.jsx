import React from 'react';
import '../../assets/styles/components/form/FormContact.css';
const FormContact = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center mb-3 mt-5'>
      <div className='intro-form-contact d-flex flex-column'>
        <h3>Join With Us</h3>
        <div className="line-break-intro d-flex align-items-center justify-content-center"></div>
      </div>
      <div className="wrapper-form-contact mt-3">
        <input type="email" placeholder='Enter your email'/>
        <button type='submit'>Submit</button>
      </div>
    </div>
  )
}

export default FormContact
