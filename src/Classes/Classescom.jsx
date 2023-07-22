import React from 'react';
import img1 from '../photos/classes1.jpg';
import img2 from '../photos/user.png'
import './Classescom.scss';
import { Link } from 'react-router-dom';
// import Button from '../Button/Button';

const Classescom = (props) => {
  return (
    <>
    <div className='classes'>
        <div className='clc'>
        <div className='im'>
            <img src={props.images} width={580.6}
            height={650}
            className='imge'
            ></img>

        </div>
        <div className='bu'>
            <h1>{props.special}</h1>
        </div>
        <div className='red'>
        </div>
        <div className='timg'>
            <div className='dor'>
                <img src={img2} width={20} height={32}></img>
                <h2>{props.name}</h2>

            </div>
            <div className='time'>
                
                <h2>🕛 Wed: 9:00 am</h2>

            </div>
        </div>
        <div className='bt'>
        <Link to='/contact'>
            <button className='hn'>Join Now 🏹</button>
        </Link>
        </div>
        </div>

    </div>
    </>
  )
}

export default Classescom