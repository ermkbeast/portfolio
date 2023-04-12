import React from 'react'
import './Expriencs.css'
import {TbDiscountCheckFilled} from 'react-icons/tb';
import { icons } from 'react-icons'
const Exprience = () => {
  return (
    <section id='exprience' className='container'>
      <h5>what skills i have</h5>
      <h2>My Exprience</h2>
      <div className='exprience_continer'>
        <div className='front_end'>
          <h3 className='h3_exprience'>Front End</h3>
          <div className='frontend_contener'>
            <div className='frontend_skills'>
              <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>HTML</h4>
              <small className='text-light'>Exprience</small>
            </div>
            <div className='frontend_skills'>
              <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>CSS</h4>
              <small className='text-light'>Exprience</small>
            </div>
            <div className='frontend_skills'>
              <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>Javascript</h4>
              <small className='text-light'>Exprience</small>
            </div>
            <div className='frontend_skills'>
              <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>React</h4>
              <small className='text-light'>Exprience</small>
            </div>
          </div>
        </div>
        <div className='back_end'>
          <h3 className='h3_exprience'>Back End</h3>
          <div className='backend_contener'>
            <div className='backend_skills'>
            <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>Java</h4>
              <small className='text-light'>Exprience</small>
            </div>
            <div className='backend_skills'>
            <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>Node</h4>
              <small className='text-light'>Exprience</small>
            </div>
            <div className='backend_skills'>
            <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>Mongo Db</h4>
              <small className='text-light'>Exprience</small>
            </div>
            <div className='backend_skills'>
            <TbDiscountCheckFilled></TbDiscountCheckFilled>
              <h4>MySql</h4>
              <small className='text-light'>Exprience</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Exprience