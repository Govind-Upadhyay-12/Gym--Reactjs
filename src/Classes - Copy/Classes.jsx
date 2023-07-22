import React from 'react'
// import Middle2comp from '../Middle2/Middle2comp'
import Classescom from './Classescom'
import Headercom from '../Header/Headercom'
import Footercom from '../Footer/Footercom'
import Contactcom from '../Contact/Contactcom'
import './Classes.scss';
import img1 from '../photos/classes1.jpg'
import img2 from '../photos/classes2.jpg'
import img3 from '../photos/classes3.jpg'
import img4 from '../photos/classes4.jpg'
import img5 from '../photos/classes5.jpg'
import img6 from '../photos/classes6.jpg'
import img7 from '../photos/classes7.jpg'
import cyc from '../photos/cyc.jpg'


const Classes = () => {
  return (
    <div>
      <Headercom></Headercom>
      <Contactcom name="Classes"></Contactcom>
      <div className='cl1'>
    <Classescom images={img1} special="Boxing"
    name="Govind Upadhyay"
    
    ></Classescom>
    <Classescom images={img2} special="Exercise"
    name="Angela k"
    ></Classescom>
    <Classescom images={img3} special="Yoga"
    name="joeklan"
    
    ></Classescom>
    </div>
    <div className='cl2'>
    <Classescom images={img4} special="Weight Lifting"
    name="Larry wheels"
    
    ></Classescom>
    <Classescom images={img5} special="Running"
    name="Zinia Zessy"
    
    ></Classescom>
    <Classescom images={img6} special="Cross Fit"
    name="Jenifer Alex"
    
    ></Classescom>
    </div>
    <div className='cl3'>
    <Classescom images={img7} special="WorkOut" name="Shawn Ray"></Classescom>
    <Classescom images={cyc} special="Cycling" name="Dorian Yate"></Classescom>
    {/* <Classescom></Classescom> */}
    </div>
    <Footercom></Footercom>
    </div>
  )
}

export default Classes