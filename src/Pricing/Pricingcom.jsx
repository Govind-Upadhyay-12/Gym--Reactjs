import React from "react";
import "./Pricingcom.scss";
import laal from "../photos/laal.svg";
import PricingChart from "./PricingChart";
import img from '../photos/price2.jpg';
import img2 from '../photos/price3.jpg'
import img3 from '../photos/price.jpg';

const Pricingcom = () => {
  return (
    <div className="pricing">
        <div className="upper">
      <div className="redtemp">
        <img src={laal} width={350}></img>

        <div className="pric">
          <h2>PRICING CHART</h2>
        </div>
      </div>
      <div className="exclusive">
        <h1>Exclusive Pricing Plan</h1>
      </div>
      <div className="gym"
      >
        <h2>Gymat an unknown printer took a galley of type and scrambled<br></br></h2>
           <h2 className="lef">make a type specimen book</h2>
      </div>
      </div>

      <div className="oee" style={{marginTop:"6rem"}}>
        
        <PricingChart images={img}amount="$  39  p/m" ></PricingChart>
        <PricingChart images={img2}  amount="$  49  p/m" ></PricingChart>
        <PricingChart images={img3}  amount="$  109  p/m" ></PricingChart>

      </div>
    </div>
  );
};

export default Pricingcom;
