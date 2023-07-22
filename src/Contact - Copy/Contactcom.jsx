import React from 'react'
import contactimg from '../photos/contacthero.jpg';
import './Contanct.scss';

const Contactcom = (props) => {
  return (
    <>
    <div className='contact'>
      <div className='maincon'>
        <img src={contactimg} width={2279}  height={350}></img>

      </div>
      <div className='text'>
        <h1>{props.name}</h1>
          
      </div>

    </div>
    
    </>
  )
}

export default Contactcom;