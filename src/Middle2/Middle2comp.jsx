import React from 'react';
import './middleco.scss';
import laal from '../photos/laal.svg';
import body from '../photos/bodygo.jpg';
import bodytu from '../photos/bodytu.jpg';
import bodythre from '../photos/bodythre.jpg';
import medi from '../photos/medi.avif';
import cyc from '../photos/cyc.jpg';
import redbl from '../photos/redbl.jpg';
import dumble from '../photos/dumble.png';
import rasi from '../photos/rasi.jpg'
import karate from '../photos/krate.jpg'

const arr = [
  {
    img: body,
    h: 'Power',
    time:"Wednesday: 9:00am-10:00am",

  },
  {
    img: bodytu,
    h: 'Exercise',
    time:"Thursday: 9:00am-10:00am",
  },
  {
    img: karate,
    h: 'Karate',
    time:"Friday: 9:00am-10:00am",
  },
  {
    img: medi,
    h: 'Meditation',
    time:"Monday: 9:00am-10:00am",
  },
  {
    img: cyc,
    h: 'Cycling',
    time:"Tuesday: 9:00am-10:00am",
  },
  {
  img: rasi,
  h: 'Work Out',
  time:"Sunday: 9:00am-10:00am",
},
];

const Middle2comp = () => {

  const firstRow = arr.slice(0, 3); //es ham simple ye karke slice krke complete karke...
  const secondRow = arr.slice(3, 6);

  return (
    <>
      <div className='mainn'>
        <div className='red'>
          <div className='laali'>
            <img src={laal} width={380} alt='Laal'></img>
          </div>
          <div className='featred'>
            <h2>OUR FEATURED CLASS</h2>
          </div>
        </div>
        <div className='weare'>
          <h1>We Are Offering Best Flexible Classes</h1>
        </div>
        <div className='lower'>
          <div className='image-row'>
            {firstRow.map((value, key) => (
              <div className='image' key={key}>
                <img src={value.img} width={670} alt={`Cycling ${key + 1}`} className='bouncer'></img>
                <div className='headin'>
                  <h1>{value.h}</h1>
                </div>
                <div className='log'>
                  <img src={dumble} alt='Dumble'></img>
                </div>
                <div className='redtem'>
                  <img src={redbl} width={600} height={50} alt='Red Template'></img>
                </div>
                <div className='weekly'>
                  <h2>{value.time}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className='image-row1'>
            {secondRow.map((value, key) => (
              <div className='image' key={key}>
                <img src={value.img} width={670} alt={`Cycling ${key + 4}`} className='bouncer'></img>
                <div className='headin'>
                  <h1>{value.h}</h1>
                </div>
                <div className='log'>
                  <img src={dumble} alt='Dumble'></img>
                </div>
                <div className='redtem'>
                  <img src={redbl} width={600} height={50} alt='Red Template'></img>
                </div>
                <div className='weekly'>
                  <h2>{value.time}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle2comp;
