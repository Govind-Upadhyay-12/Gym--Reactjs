import React from 'react'
import pahad from '../photos/pahad.png'
import gal2 from '../photos/galery2.jpg'
import './aboutsec2.scss'

const Aboutcom2 = () => {
  return (
    <>
      <div className='aboutsection2'>
     <div className='hist'>
     <img src={gal2} width={695} height={530}></img>
    </div>
      
      <div className='his'>
      <div className='teer'> 
        <img src={pahad} className='df'></img>
      </div>
      <div className='his'>
      <h2>Our History</h2>
      <h3>Amet minim mollit<br></br> non deserunt ullamco est sit aliqua dolor<br></br> do amet sint.<br></br> Velit officia consequat duis enim velit mollit<br></br> Exercitation veniam consequat.</h3>
      </div>

     </div>
        
      
      </div>

     
    
    
    </>
  )
}

export default Aboutcom2