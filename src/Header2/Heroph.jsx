import React from 'react';
import './Heroph.scss';
import img1 from '../photos/hero-img.jpg';
import img2 from '../photos/scribble.jpg';
import Text from './Text';
import Sliding from '../Slidingsec/Sliding';
import Header3 from '../Header3/Header3';

const Heroph = () => {
  return (
    <>
      <div className='yu'>
        <div className='hero'>
          <img src={img1} className='heroim' alt='Hero Image' />
          <div className='scribble'>
            <img src={img2} width={420} height={100} alt='Scribble' />
          </div>
          <h2 className='ener'>Find Your Energy</h2>
          <Text></Text>
          <div className='sliding'>
            {/* <Sliding></Sliding> */}
          </div>
        </div>
     
      </div>
     
      
    </>
  );
};

export default Heroph;
