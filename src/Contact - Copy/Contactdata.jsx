import React from 'react'
import './Contactdata.scss';
import Form from './Form';
import facebook from '../photos/facebook.png'
import insta from '../photos/instagram.png';
import twitter from '../photos/twitter.png'

const Contactdata = () => {
  return (
    <div className='priya'>
        <div className='firstcon'>
        <div className='da'>
            <h1>We are here for help you!<br></br> To Shape Your Body.</h1>

        </div>
        <div className="contda">
            <h2>At Gymate, we are dedicated to helping you achieve<br></br> the body of your dreams. Our expert trainers and<br></br> nutritionists will work with you to  create a personalized<br></br> fitness and nutrition plan that helps you reach your<br></br> specific goals.</h2>

        </div>
        <div>

        </div>
        <div className='ft'>
         <div className='newy'>
            <h1>New york City,USA</h1>
            <p>85 Briston Mint Street,
              London,<br></br> E1 8LG, USA</p>
              <div className='red'></div>
         </div>
         <div className='newy'>
          <h1>Opening Hours</h1>
         <p>Mon to Fri: 7:30 am — 1:00 am<br></br>

         Mon to Fri: 7:30 am — 1:00 am
         </p> 
         <div className='red'></div>    

         </div>
         </div>
         <div className='ft1'>
         <div className='newy'>
            <h1>Information</h1>
            <p> +800-123-4567

             gymat@gymail.com</p>
              <div className='red'></div>
         </div>
         <div className='newy' style={{marginLeft:"-3rem"}}>
          <h1>Follow Us On</h1>
          <div className='media'>
            <img src={facebook} width={35}></img>
            <img src={insta} width={35}></img>
            <img src={twitter} width={35}></img>

          </div>
         <div className='red'></div>    

         </div>
         </div>
         
        

        </div>
        <div>
            <Form></Form>

        </div>
    </div>
  )
}

export default Contactdata