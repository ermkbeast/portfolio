import React from 'react'
import './Testmonial.css'
import imgxx from '../../assets/avatar1.jpg'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
const Testmonial = (props) => {
  return (
    <section className='container t_container'>
      <h5>Review from client</h5>
      <h2>Testmonial</h2>
      <div className='testmonial'>
      
        {
          props.data.map(({id,image,name,para},index)=>{
            return(
            <div key={id} className='testmonial-content'>
            <div className='testmonial-image'>
              <img src={props.data[index].image} alt='image' className='img-test'></img>
            </div>
            <h3>{name}</h3>
            <p>{para}
            </p>
          </div>
          )
          })
        }
      
      </div>
    </section>
  )
}

export default Testmonial