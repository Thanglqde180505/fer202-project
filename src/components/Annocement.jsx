import React from 'react'
import '../assets/styles/Annocement.css'
const Annocement = ({text}) => {
    return (
        <div className='annocement text-center'>
            <p className='title'>
                <i className="fa-solid fa-bell"></i>
                <span className='main-title'>{text}</span>
            </p>
        </div>
    )
}

export default Annocement
