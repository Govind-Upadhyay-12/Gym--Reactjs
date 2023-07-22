import React from 'react';
import './Headercom.scss';

 import { Link } from 'react-router-dom';
import img from '../photos/main.png'
import img2 from  '../photos/user.png'
import img3 from '../photos/list-text.png'
import img4 from '../photos/download.png'
import Sliding from '../Slidingsec/Sliding';


 




const Headercom = () => {
  return (
    <>
    <div className='me'>
    <div className='mainhead'>
        <div className='logo'>
            <img src={img} width={95}/>
        
        </div>
        <div className='items'>
        <Link to="/" className='home'>
          <li>Home</li>
            
            
        </Link>
        <Link to="/about" className='home'>
          <li>About</li>
            
            </Link>
            <Link to="/schedule" className='home'>
              <li>Schedule</li>
            
            </Link>
            <Link to="/gallery" className='home'>
              <li>Gallery</li>
            
            </Link>
            <Link to="/pricing" className='home'>
              <li>Pricing</li>
            
            </Link>
            <Link to="/classes" className='home'>
              <li>Classes</li>
            
            </Link>
            <Link to="/contact" className='home'>
              <li>Contact</li>
            
            </Link>
            
        </div>
        <div className='tod'>
          <img src={img2} height={40} className='im'></img>
          
          <img src={img3} width={40}
          className='imm'
          onClick
          
          ></img>
          <Link to="/contact">
          <div>
          <button className='btn'>  
          <img src={img4} width={50} className='pl'/>
          <h3 className='j'>Join Class Now</h3>
          
          </button>
        </div>
        </Link>
          

    </div>
    
    </div>
   
    </div>
    
      
    </>
  )
}

export default Headercom;