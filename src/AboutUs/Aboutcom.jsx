import React from 'react';
import './Aboutcom.scss';
import gal1 from '../photos/galery1.jpg'
import teer from '../photos/teer.png'


const Aboutcom = () => {
  return (
    <>
    <div className='about_section'>
     <div className='t' >
      <div className='teer'> 
        <img src={teer} ></img>
      </div>
      <div className='his'>
      <h2>Our History</h2>
      <h3>Amet minim mollit<br></br> non deserunt ullamco est sit aliqua dolor<br></br> do amet sint.<br></br> Velit officia consequat duis enim velit mollit<br></br> Exercitation veniam consequat.</h3>
      </div>

     </div>


     <div className='galph'>
     <img src={gal1} width={695} height={530}></img>

     </div>
    </div>
    
    </>
  )
}

export default Aboutcom