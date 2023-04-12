import React from 'react'
import './Portfolio.css'
import prj from '../../assets/prj.jpg'
import Portfoliobtn from './Portfoliobtn'
const Portfoliojs = (props) => {
  console.log(props.data)
  return (
    <section className='container p_container'>
      <h5>what inside</h5>
      <h2>PORTFOLIO</h2>
      <div className='portfolioo'>
      {
        props.data.map(({id,image,title,gitln,live_link})=>{
         return(
          <div  key={id} className='portfolio-div'>
            <div className='portfolio-div-image'>
              <img src={image} alt='project image'></img>
            </div>
            <div className='portfolio-div-title'>
                <h3>{title}</h3>
            </div>
            <div className='portfolio-div-button'>
              {
                console.log("git : "+gitln)
              }
            <Portfoliobtn gitln={gitln} live_link={live_link}></Portfoliobtn>
            </div>
          </div>
         )
        })
      }
      </div>
    </section>
  )
}

export default Portfoliojs