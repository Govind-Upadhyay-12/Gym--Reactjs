import React from 'react'
import './Pricing.scss';
import Headercom from '../Header/Headercom';
import Pricingcom from './Pricingcom';
import Footercom from '../Footer/Footercom';

const Pricing = () => {
  return (
    <div>
        <Headercom></Headercom>
        <Pricingcom></Pricingcom>
        <div style={{marginTop:"48rem"}}>
        <Footercom></Footercom>
        </div>

    </div>
  )
}

export default Pricing