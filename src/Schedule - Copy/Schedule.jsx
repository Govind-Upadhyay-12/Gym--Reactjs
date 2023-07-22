import React from 'react'
import './Schedule.scss';
import Schedulecom from './Schedulecom';
import Headercom from '../Header/Headercom';
import Contactcom from '../Contact/Contactcom';
import Footercom from '../Footer/Footercom';

const Schedule = () => {
  return (
    <div>
        <Headercom></Headercom>
        <Contactcom name="Schedule"></Contactcom>
        <Schedulecom></Schedulecom>
        <Footercom></Footercom>
    </div>
  )
}

export default Schedule