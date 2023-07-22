import React, { useState } from 'react';
import './Schedulecom.scss';
import Scheduledetail from './Scheduledetail';

const Schedulecom = () => {
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thur, setThur] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);

  function showOnly(day) {
    setMon(day === 'mon');
    setTue(day === 'tue');
    setWed(day === 'wed');
    setThur(day === 'thur');
    setFri(day === 'fri');
    setSat(day === 'sat');
  }

  return (
    <div className='schedule'>
      <div className='paaj'>
        <div className='bto'>
          <button onClick={() => showOnly('mon')}>Monday</button>
        </div>
        <div className='bto'>
          <button onClick={() => showOnly('tue')}>Tuesday</button>
        </div>
        <div className='bto'>
          <button onClick={() => showOnly('wed')}>Wednesday</button>
        </div>
        <div className='bto'>
          <button onClick={() => showOnly('thur')}>Thursday</button>
        </div>
        <div className='bto'>
          <button onClick={() => showOnly('fri')}>Friday</button>
        </div>
        <div className='bto'>
          <button onClick={() => showOnly('sat')}>Saturday</button>
        </div>
      </div>

      <div className={`mon ${mon ? '' : 'hidden'}`}>
        <div className='st'>
          <Scheduledetail fit="exercise"></Scheduledetail>
        </div>
        {mon ? (
          <div style={{ marginTop: "-6rem" }} className='scd'>
            <Scheduledetail fit="Building"></Scheduledetail>
          </div>
        ) : null}
        <div style={{ marginTop: "-6rem" }} className='rd'>
          <Scheduledetail fit="Runnig"></Scheduledetail>
        </div>
        <div style={{ marginTop: "-6rem" }} className='rth'>
          <Scheduledetail fit="Cycling"></Scheduledetail>
        </div>
      </div>

      <div className={`tue ${tue ? '' : 'hidden'}`}>
        <div className='st'>
          <Scheduledetail fit="Boxing"></Scheduledetail>
        </div>
        {tue ? (
          <div style={{ marginTop: "-6rem" }} className='scd'>
            <Scheduledetail fit="Yoga"></Scheduledetail>
          </div>
        ) : null}
        <div style={{ marginTop: "-6rem" }} className='rd'>
          <Scheduledetail fit="CrossFit"></Scheduledetail>
        </div>
        <div style={{ marginTop: "-6rem" }} className='rth'>
          {/* <Scheduledetail></Scheduledetail> */}
        </div>
      </div>
      <div className={`wed ${wed? '' : 'hidden'}`}>
        <div className='st'>
          <Scheduledetail fit="Cycling"></Scheduledetail>
        </div>
        {wed ? (
          <div style={{ marginTop: "-6rem" }} className='scd'>
            <Scheduledetail fit="Building"></Scheduledetail>
          </div>
        ) : null}
        <div style={{ marginTop: "-6rem" }} className='rd'>
          {/* <Scheduledetail></Scheduledetail> */}
        </div>
        <div style={{ marginTop: "-6rem" }} className='rth'>
          <Scheduledetail fit="fitness"></Scheduledetail>
        </div>
      </div>
      <div className={` ${thur? '' : 'hidden'}`}>
        <div className='st'>
          <Scheduledetail fit="muscles"></Scheduledetail>
        </div>
        {thur ? (
          <div style={{ marginTop: "-6rem" }} className='scd'>
            {/* <Scheduledetail></Scheduledetail> */}
          </div>
        ) : null}
        <div style={{ marginTop: "-6rem" }} className='rd'>
          <Scheduledetail fit="yoga"></Scheduledetail>
        </div>
        <div style={{ marginTop: "-6rem" }} className='rth'>
          <Scheduledetail fit="Cycling"></Scheduledetail>
        </div>
      </div>
      <div className={`fri ${fri? '' : 'hidden'}`}>
        <div className='st'>
          <Scheduledetail fit="Cardio"></Scheduledetail>
        </div>
        {fri ? (
          <div style={{ marginTop: "-6rem" }} className='scd'>
            {/* <Scheduledetail></Scheduledetail> */}
          </div>
        ) : null}
        <div style={{ marginTop: "-6rem" }} className='rd'>
          {/* <Scheduledetail></Scheduledetail> */}
        </div>
        <div style={{ marginTop: "-6rem" }} className='rth'>
          {/* <Scheduledetail></Scheduledetail> */}
        </div>
      </div>
      <div className={`sat ${sat? '' : 'hidden'}`}>
        <div className='st'>
          <Scheduledetail fit="Running"></Scheduledetail>
        </div>
        {sat ? (
          <div style={{ marginTop: "-6rem" }} className='scd'>
            <Scheduledetail fit="Yoga"></Scheduledetail>
          </div>
        ) : null}
        <div style={{ marginTop: "-6rem" }} className='rd'>
          {/* <Scheduledetail></Scheduledetail> */}
        </div>
        <div style={{ marginTop: "-6rem" }} className='rth'>
          {/* <Scheduledetail></Scheduledetail> */}
        </div>
      </div>

      
    </div>
  );
};

export default Schedulecom;
