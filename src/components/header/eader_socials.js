import React from 'react'
import './Header_social.css';
import{BsLinkedin , BsGithub} from 'react-icons/bs'
import{FaFacebookSquare ,FaFacebookMessenger} from 'react-icons/fa'
const Header_socials = () => {
  return (
    <div className='header-social'>
      <a href=""><BsLinkedin></BsLinkedin></a>
      <a href=""><FaFacebookSquare></FaFacebookSquare></a>
      <a href=''><FaFacebookMessenger></FaFacebookMessenger></a>
      <a href=''><BsGithub></BsGithub></a>
    </div>
  )
}

export default Header_socials