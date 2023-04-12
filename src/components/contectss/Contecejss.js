import React from 'react'
import './Contectcss.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
const Contecejss = () => {
  return (
    <section id='contect' className='container '>
      <h5>Get in Touch</h5>
      <h2>Contect Me</h2>
      <div className='contect-us'>
        <div className='contect-us-card-both'>
          <div className='contect-us-card'>
            <AiOutlineMail></AiOutlineMail>
            <h3>Email</h3>
            <small>mayank.98.rock@gmail.com</small>
            <p>Sand a message</p>
          </div>

          <div className='contect-us-card'>
            <RiMessengerLine></RiMessengerLine>
            <h3>Messenger</h3>
            <small>messenger</small>
            <p>Sand a message</p>
          </div>

          <div className='contect-us-card'>
            <AiOutlineWhatsApp></AiOutlineWhatsApp>
            <h3>Whatsapp</h3>
            <small>7004743604</small>
            <p>Sand a message</p>
          </div>
        </div>
        <div className='contect-us-card-both'>
          <form className='contect-us-form'>
            <input type='text' id='text' name='text' placeholder='your name'></input> 
            <input type='email' id='email' name='email' placeholder='your email'></input> 
            <textarea type='text' id='msg' name='msg' placeholder='your message'></textarea> 
            <button className='btn btn-primary'>Sand message</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contecejss