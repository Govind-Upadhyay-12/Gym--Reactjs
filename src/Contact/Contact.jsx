import React from 'react'
import Contactcom from './Contactcom'
import Headercom from '../Header/Headercom'
import Footercom from '../Footer/Footercom'
import Contactdata from './Contactdata'
import Map from './Mapp'

const Contact = () => {
  return (
    <>
    <div>
        <Headercom></Headercom>
        <Contactcom name="Contact"></Contactcom>
        <Contactdata></Contactdata>
        {/* <Map></Map> */}
        <Map></Map>
        
    </div>
    <div className='bebe'>
      <Footercom></Footercom>
    </div>
    </>

  )
}

export default Contact