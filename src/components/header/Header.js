import React from 'react'
import './Header.css'
import Header_btn from './Header_btn';

import im from '../../assets/me.png'
import Header_socials from './eader_socials';
const Header = () => {
  return (
        <header>
          <div className='container header__container'>
              <h5>Hello I'm</h5>
              <h2>Mayank Kumar Singh</h2>
              <h5 className='text-light'>React js Devloper</h5>
              <Header_btn></Header_btn>
              <Header_socials></Header_socials>
              <div className='my_image'>
                <img src={im} alt='my image'></img>
              </div>
              <div className='scroll_down'>
              <a href='#contect'>Scroll Down</a>
              </div>
             
            


              
          </div>  
        </header>
  )
}

export default Header;

