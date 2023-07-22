import React from 'react'
import './Scheduledetails.scss';
import { Link } from 'react-router-dom';

const Scheduledetail = (props) => {
  return (
    <div className='sdeta'>
        <div className='de'>
        <div className='fj'>
            <div className='class'>
                <h2>Class Name</h2>
            </div>
            <div className='fit'>
                <h2>{props.fit}</h2>

            </div>

        </div>
        <div className='time'>
            <div className='subt'>
          <h2>Time</h2>
            </div>
            <div className='su'>
                <h2>9:00am-10:00am</h2>

            </div>

        </div>
        <div className='treni'>
            <div className='subtr'>
         <h2>Trainer</h2>
            </div>
            <div className='vf'>
        <h2>David Vila</h2>
            </div>

        </div>
        <div className='karan'>
           <Link to="/contact">
            <button className='madhav'> Join Now</button>
            </Link>

        </div>
        </div>
    </div>
  )
}

export default Scheduledetail