import React from 'react'
import './text.scss';
// import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Text = () => {
  return (
    <div className='main'>
        <h1 className='y'>
            MAKE YOUR BODY
        </h1>
        <h1>
            FIT & PERFECT
        </h1>
        <div>
        
            <div className="bord" style={{color:"red"}}></div>
            <Link to="/classes">
            <div className="butt"  >
                <p  >Our Classes ➡️</p>
            </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Text