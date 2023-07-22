import React from 'react';
import './Sliding.scss';
import img from '../photos/main.png';
import img1 from '../photos/cross.png';
import img2 from '../photos/1.jpg';
import img3 from '../photos/2.jpg';
import img4 from '../photos/3.png';
import img5 from '../photos/4.jpg';
import img6 from '../photos/5.jpg';
import img7 from '../photos/6.jpg';
import Contact from './Contact';

const Sliding = () => {
  const arrphoto = [
    {
      imgd: img2
    },
    {
      imgd: img3
    },
    {
      imgd: img4
    },
    {
      imgd: img5
    },
    {
      imgd: img6
    },
    {
      imgd: img7
    }
  ];

  return (
    <>
      <div className='ma'>
        <div className='hed'>
          <img src={img} width={75} alt='Logo' />
          <img src={img1} width={50} className='buttt' />
        </div>
        <div className='about'>
          <h2>About Us</h2>
          <div className='pr'>
            <p>
              Find out who we are <br />
              and what makes us unique. We are<br />
              a community-driven gym committed <br />
              to providing personalized fitness<br />
              experiences for all levels of fitness <br />
              enthusiasts in a welcoming and <br />
              supportive environment.
            </p>
          </div>
        </div>
        <div className='gall'>
          <h1>GALLERY</h1>
        </div>
        <div className='wrapper'>
          <div className='row1'>
            {arrphoto.slice(0, 3).map((item, index) => (
              <img
                src={item.imgd}
                key={index}
                alt={`Image ${index}`}
                width={110}
                height={170}
                style={{ marginRight: '20px' }}
                className='gp'
              />
            ))}
          </div>
          <div className='row2'>
            {arrphoto.slice(3, 6).map((item, index) => (
              <img
                src={item.imgd}
                key={index}
                alt={`Image ${index}`}
                width={150}
                height={170}
                style={{ marginRight: '20px' }}
                className='gp'
              />
            ))}
          </div>
        </div>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default Sliding;
