import React from 'react'
import './middle.scss';
import Middle2comp from './Middle2comp';
import BMI from '../BMI/BMI';
import Footer from '../Footer/Footer';

const Middle2 = () => {
  return (
    <>
    <div>
        <Middle2comp></Middle2comp>
    </div>
    <div>
      <BMI></BMI>

    </div>
    <div>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Middle2