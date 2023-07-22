import React from 'react'
import img from '../photos/clock.png'
import './Header3.scss';

const Headerc3 = (props) => {
  return (
    <div className='papa'>
    <div className='hede'>
        <div className='ima'>
      <img src={props.img} width={130}></img>
        </div>
        <div className='heading'>
            <h1>{props.heading}</h1>

        </div>
        <div className='cont'>
            <h2>{props.content}</h2>

        </div>

    </div>
    </div>
  )
}

export default Headerc3