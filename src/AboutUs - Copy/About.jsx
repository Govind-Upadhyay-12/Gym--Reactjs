import React from 'react'
import Headercom from '../Header/Headercom'
import Aboutcom from './Aboutcom'
import Footercom from '../Footer/Footercom'
import Middlecom from '../Middle/Middlecom'
import Aboutcom2 from './Aboutcom2'
import './About.scss'

const About = () => {
  return (
    <div>
        <Headercom></Headercom>
        <div className='mq'>
        <Middlecom></Middlecom>
        </div>
        <div className='ab'>
        <Aboutcom></Aboutcom>
        </div>
        <div>
        <Aboutcom2></Aboutcom2>
        </div>
        <div className='ab'>
        <Footercom></Footercom>
        </div>
        </div>
    
  )
}

export default About