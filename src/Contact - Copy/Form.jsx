import React from 'react'
import './form.scss';
import Button from '../Button/Button';

const Form = () => {
  return (
    <div className='form'>
        <div className='fk'>
        <div className='leaveu'>
            <h1>Leave Us Your Info</h1>

        </div>
        <div className='red'></div>
        <div className='full'>
            <input type="text" placeholder='Full Name'></input>
        </div>
        <div className='email'> 
            <input type="text" placeholder='Email Address'></input>
        </div>
        <div>
        <select name="" id="select">
				<option value="Govind">Select Value</option>
				<option value="Priya">Priya</option>
			</select>
            </div>
            <div className='textarea'>
            <textarea className='tex' placeholder='Comment'></textarea>
            </div>
            <div className='b'>
          <button>Submit Now</button> 
          </div> 

        
       </div> 
    </div>
  )
}

export default Form