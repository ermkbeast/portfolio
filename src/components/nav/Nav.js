import React from 'react'
import './Nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineUser , AiOutlineContacts} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
const Nav = () => {
  return (
    <nav className='nav-bar'>
      <a href='#'><BiHomeAlt2></BiHomeAlt2></a>
      <a href='#about'><AiOutlineUser></AiOutlineUser></a>
      <a href='#exprience'><BiBook></BiBook></a>
      <a href='#services'><MdOutlineMiscellaneousServices></MdOutlineMiscellaneousServices></a>
      <a href='#contect'><AiOutlineContacts></AiOutlineContacts></a>
    </nav>
  )
}

export default Nav