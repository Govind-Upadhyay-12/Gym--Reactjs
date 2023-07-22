import React from 'react'
import girl from '../photos/girl-run.png';
import laal from '../photos/laal.svg';
import design from'../photos/design.png';
import running from '../photos/running.png';
import modern from '../photos/equpments.png';
import pull from '../photos/weightlifter.png'
import gym from '../photos/gym.png';
import redbg from '../photos/girl-redbg.svg';
import './Middlecom.scss';
import Button from '../Button/Button';



const Middlecom = () => {
  return (
    <div className='middle'> 
        <div className='who'>
            <div className='red_temp'>
                   <div className='laal'>
                    <img src={laal} width={380}></img>


                   </div>
                   <div className='weare'>
                    <h2>Who We Are</h2>

                   </div>
            </div>
            <div className='health'> 
                <h1>Take Your Health And Body To<br></br> Next Level !!</h1>
            </div>
            <div className='hdat'>
            <h2>
            Take your health and body to the next level with our comprehensive<br></br> program designed to help you reach your fitness goals. 
            </h2>
            </div>
            <div className="image_container">
                <div className="prof">
                    <img src={pull} width={90}></img>
                    <h1>Professional<br></br> Trainers</h1>

                </div>
                <div className="mod">
                    <img src={modern} width={90}></img>
                    <h1>Modern<br></br> Equipments</h1>

             </div>
             <div className="prof">
                <img src={gym} width={90}></img>
                <h1>Fancy Gym<br></br> Machines</h1>

              </div>
                

            </div>
            <div className="button">
                <Button name="Take A Tour"></Button>

            </div>

        </div>
        <div className='otherhalf'>
            <div className="rning">
                <img src={redbg} height={900}></img>

            </div>
            <div className="temo">
                <img src={running} width={130}></img>

            </div>
            <div className="laal">
                <img src={girl} height={900}></img>

            </div>
            <div className="air">
                <img src={design} width={200}></img>

            </div>


      </div>
    </div>
  )
}

export default Middlecom