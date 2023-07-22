import React from 'react'
import './PricingChart.scss';
import img from '../photos/gymguy.jpg'
import Button from '../Button/Button';

const PricingChart = (props) => {
  return (
    <div className='chart'>
        <div className='ik'>
            <img src={props.images} width={450} height={400}></img>

        </div>
        <div className='pricetag'>
            <div className='andar'>
            <div  className='begi'>
                <h2>Beginners</h2>
            </div>
            <div className='price' style={{marginTop:"2rem"}}>
                <h2>{props.amount}</h2>

            </div>
            <div className='dat' style={{marginTop:"2rem"}}>
                <h2>Free Hand</h2>

            </div>
            <div className='dat' style={{marginTop:"2rem"}}>
                <h2>Gym Fitness</h2>

            </div>
            <div className='dat' style={{marginTop:"2rem"}}>
                <h2>Weight Loss</h2>
            </div>
            <div className='dat' style={{marginTop:"2rem"}}>
                <h2>Personal Trainer</h2>
                
            </div>
            <div  className='dat'style={{marginTop:"2rem"}}>
                <h2>Cycling</h2>
                
            </div>
        
            <div className='by' style={{marginTop:"2rem",marginLeft:"2rem"}}>
             
            <div className="bord"></div>
            <div className="but" >
                <p>PURCHASE NOW</p>
            </div>
            
        
         
        </div>
        </div>
        </div>

    </div>
  )
}

export default PricingChart