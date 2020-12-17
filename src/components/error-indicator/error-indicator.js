import React from 'react';
import './error-indicator.css';
import icon from './ilon.jpg'

const ErrorIndicator = () => {

    return (
        <div className='error-indicator'>
                <img className='icon-star'
                     src={ icon }
                     alt='error_death_star' />
                <span className='card-title error-header text-center'>
                    BOOM!!
                </span>
                <span className='card-text error-text'>
                    Something was wrong
                </span>
                <span className='card-text  error-text'>
                    but droids already fix it!
                </span>
        </div>
    )
}

export default ErrorIndicator;