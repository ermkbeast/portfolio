import React from 'react'
import '../../components/header/Header_btn.css'
import CV from '../../assets/cv.pdf'
const Header_btn = () => {
  return (
    <div className='header-btn-class' id='contect'>  
        <a href={CV} className='btn' download>Download Cv</a>
        <a href="" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default Header_btn