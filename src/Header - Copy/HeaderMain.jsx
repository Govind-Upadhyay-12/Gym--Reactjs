import React from 'react'
import Headercom from './Headercom'
import Hero from '../Header2/Hero'
import Header3 from '../Header3/Header3';
import Sliding from '../Slidingsec/Sliding';


const HeaderMain = () => {
  return (
    <>
    <div>
        <Headercom></Headercom>
    </div>
    <div>
      <Hero></Hero>
      <div  className='slide'>
      {/* <Sliding></Sliding> */}
      </div>
    </div>
    <div>
      
    </div>
    
    </>
  )
}

export default HeaderMain