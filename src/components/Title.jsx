import React from 'react'
import '../assets/styles/Title.css'
const Title = ({ text1, text2 }) => {
    return (
        <div className='title-container d-flex flex-column align-items-center justify-content-center'>
            <p className='title-content'><span>{text1}</span> <span>{text2}</span></p>
        </div>
    )
}

export default Title;
