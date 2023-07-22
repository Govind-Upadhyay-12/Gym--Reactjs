import React from 'react'
import './Galleryhead.scss'
import gallery from '../photos/contacthero.jpg'

const Galleryhead = () => {
  return (
    <>
    <div className='contact'>
      <div className='maincon'>
        <img src={gallery} width={2279}  height={350}></img>

      </div>
      <div className='text'>
        <h1>Gallery</h1>
          
      </div>

    </div>
    
    </>
  )
}

export default Galleryhead