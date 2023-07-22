import { React, useState } from 'react';
import './BMIcom.scss';
import govind from '../photos/govind.jpg';

const BMIcom = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return; // If weight or height is not provided, do nothing

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI: weight (kg) / (height (m) * height (m))
    const calculatedBMI = weight / (heightInMeters * heightInMeters);

    setBmi(calculatedBMI.toFixed(2)); // Fixing the BMI value to 2 decimal places

    
   
  };

  return (
    <div className='bmi'>
      <div className='bmicom'>
        <div className='theory'>
          <h1>
            Let's Calculate Your <span className='bb'>BMI</span>{' '}
          </h1>
        </div>
        <div className='theodata'>
          <h2>Easily determine your body mass index with our accurate calculation tool</h2>
        </div>
        <div className='input'>
          <div className='weight'>
            <input
              className='pehla'
              placeholder='weight/kg'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className='height'>
            <input
              className='dusra'
              placeholder='height/cm'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        <div className='answer'>
          <div className='yourb'>
            <h2>Your BMI is: <span className='data'>{bmi}</span></h2>
            <p>{bmiStatus}</p>
          </div>
          <div className='weight'>
            <h2>
              Your Weight is: <span className='data'>{weight}</span>
            </h2>
          </div>
        </div>
        <div className='bt'>
          <button onClick={calculateBMI}>Calculate</button>
        </div>
      </div>
      <div className='photo'>
        <div className='smarty'>
          <img src={govind} height={700} width={500} alt='Govind' />
        </div>
      </div>
    </div>
  );
};

export default BMIcom;
