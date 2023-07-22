import React from "react";
import "./Footercom.scss";
import logo from '../photos/main.png';
import facebook from '../photos/facebook.png'
import instagram from '../photos/instagram.png';
import twitter from '../photos/twitter.png'

const Footercom = () => {
  return (
    <div className="footer">
      <div className="leftt">
        <div className="logo">
            <img src={logo} width={100}></img>

        </div>
        <div className="content">
            <h2>Take your health and body to the next level with our <br></br> comprehensive program designed to help you<br></br> reach your fitness goals.</h2>
        </div>
        <div className="media">
          <img src={facebook} width={50} ></img>
          <img src={instagram} width={50} style={{marginLeft:"20px"}}></img>
          <img src={twitter} width={50} style={{marginLeft:"20px"}}></img>

        </div>
        <div className="privacy">
            <h2>Privacy Policy | © 2023 Gymate<br></br>
            Design by RadiusTheme</h2>
        </div>
      </div>
      <div className="middl">
        <div className="head">
          <h1>Our Classes</h1>
        </div>
        <div className="aesehi">

        </div>
        <div className="dataco">
        <div className="ost">
          <h2 >Fitness Classes</h2>
        </div>
        <div className="dnd">
          <h2>Aerobics Classes</h2>
        </div>
        <div className="trd">
          <h2>Power Yoga</h2>
        </div>
        <div className="frth">
          <h2>Learn Machines</h2>
        </div>
        <div className="fivth">
          <h2>Full-body strength</h2>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <h1>Working Hours</h1>
        </div>
        <div className="aesehi">

        </div>
        <div className="dataco">
        <div className="ost">
          <h2>Monday-Friday:</h2>
        </div>
        <div className="dnd">
          <h2>7:00am-21:00pm</h2>
        </div>
        <div className="trd">
          <h2>Saturday:</h2>
        </div>
        <div className="frth">
          <h2>7:00am-19:00pm</h2>
        </div>
        <div className="fivth">
          <h2>Sunday-Closed</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footercom;
