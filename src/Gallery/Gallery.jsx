import React from 'react'
import Headercom from '../Header/Headercom'
import Gallerycom from './Gallerycom'
import Footercom from '../Footer/Footercom'
import Sliding from '../Slidingsec/Sliding'
import Galleryhead from './Galleryhead'


const Gallery = () => {
  return (
    <div>
        <Headercom></Headercom>
        <Galleryhead></Galleryhead>
        <Gallerycom></Gallerycom>
        <Footercom></Footercom>
    </div>
  )
}

export default Gallery