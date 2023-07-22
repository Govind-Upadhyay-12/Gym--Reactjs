import React from 'react'
import img1 from '../photos/galleryc1.jpg'
import img2 from '../photos/galleryc2.jpg'
import img3 from '../photos/galleryc3.jpg'
import img4 from '../photos/galleryc4.jpg'
import img5 from '../photos/galleyrc5.jpg'
import img6 from '../photos/galleryc6jpg.jpg'
import img7 from '../photos/galleryc7.jpg'
import img8 from '../photos/galleryc8.jpg'
import img9 from '../photos/galleryc9.jpg';
import img10 from '../photos/galleryc10.jpg'
import img11 from '../photos/galleryc11.jpg'
import img12 from '../photos/galleryc12.jpg'
import './Gallerycom.scss';
import img from '../photos/maing.jpg'

const Gallerycom = () => {
  return (
    <>
    <div className='idea'>
        <img src={img} height={2000} width={2300}></img>
    
    <div className='gllery'>
        <div className='comgallery'>
            <div claaname="colec">
                <div className='img1'>
                    <img src={img1}
                    width={600}></img>
                </div>
                <div className='img2'>
                    <img src={img2} width={600}></img>
                </div>
                <div className='img3'>
                    <img src={img3} width={600}></img>
                </div>
                <div className='img4'>
                    <img src={img7} width={600}></img>
                </div>
                <div className='img5'>
                    <img src={img9} width={600}></img>
                </div>
                <div className='img6'>
                    <img src={img11} width={600}></img>
                </div>

                

            </div>
            <div className='colec2'>
                <div className='img1'>
                    <img src={img4} width={500}></img>
                </div>
                <div className='img2'>
                    <img src={img5} width={500}></img>
                </div>
                <div className='img3'>
                    <img src={img6} width={600}></img>
                </div>
                <div className='img4'>
                    <img src={img8} width={500}></img>
                </div>
                <div className='img5'>
                    <img src={img10} width={500}></img>
                </div>
                <div className='img6'>
                    <img src={img12} width={500}></img>
                </div>
                

            </div>


        </div>


    </div>
    </div>
    </>
  )
}

export default Gallerycom