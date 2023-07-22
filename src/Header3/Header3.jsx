import React from 'react'
import Headerc3 from './Headerc3'
import './Headerc3.scss'
import img1 from '../photos/clock.png';
import img2 from '../photos/todo.png';
import img3 from '../photos/weightlifter.png'
import Middle from '../Middle/Middle';

const Header3 = () => {
  return (
    <>
    <div className='fg'>
        <Headerc3 heading="PROGRESSION" content="Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time" img={img1}></Headerc3>
        <Headerc3 heading="WORKOUT" content="With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life." img={img2}></Headerc3>
        <Headerc3 heading="NUTRITIONS" content="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals." img={img3}></Headerc3>
         </div>
         <div>
          <Middle></Middle>
         
         </div>
   
    </>
  )
}

export default Header3