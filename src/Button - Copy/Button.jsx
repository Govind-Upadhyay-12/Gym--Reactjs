import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    
    
    return (
        <> <Link to="/about" >
            <div className="bord"></div>
            <div className="butt" >
                <p>{props.name}</p>
            </div>
            </Link>
        </>
    )
}

export default Button