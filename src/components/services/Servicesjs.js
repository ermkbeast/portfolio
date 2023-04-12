import React from 'react'
import { TiTick } from 'react-icons/ti'
import './Servicescss.css'
const Servicesjs = () => {
  return (
    <section id='services'>
      <h5>what i offer</h5>
      <h2>SERVICES</h2>
      <div className='container services_container'>
        {/* UI uX DESIGN */}
        <div className='container_uiux child'>
        <h3>UI UX</h3>
          <div className='list'>
            <div className='list_items'>
                <TiTick></TiTick>
                <h4>Lorem Ipsum is not simply </h4> 
            </div>
         

          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>

          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>

          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>

          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>
          </div>
        </div>
        {/* web devlopment */}
        <div className='web_dev child'>
        <h3>UI UX</h3>
          <div className='list'>
            <div className='list_items'>
                <TiTick></TiTick>
                <h4>Lorem Ipsum is not simply </h4>
            </div>
            <div className='list_items'>
                <TiTick></TiTick>
                <h4>Lorem Ipsum is not simply </h4>
            </div>
            <div className='list_items'>
                <TiTick></TiTick>
                <h4>Lorem Ipsum is not simply </h4>
            </div>
            <div className='list_items'>
                <TiTick></TiTick>
                <h4>Lorem Ipsum is not simply </h4>
            </div>
            <div className='list_items'>
                <TiTick></TiTick>
                <h4>Lorem Ipsum is not simply </h4>
            </div>
          </div>

        </div>

        {/* services 3 */}
        <div className='ser3 child'>
           
        <h3>UI UX</h3>
        <div className='list'>  
          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>
          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>
          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>
          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>
          <div className='list_items'>
            <TiTick></TiTick>
            <h4>Lorem Ipsum is not simply </h4>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Servicesjs