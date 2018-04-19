import React from 'react';
import './Title.css';

const Title = ({ value }) => {
    return (
        <div className='component-title-container'>
            <h1 className='component-title'>{value}</h1>
        </div>
    )
}

export default Title;