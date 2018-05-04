import React from 'react';
import './Title.css';

const Title = ({ value, className }) => {
    return (
        <div className={className}>
            <h1>{value}</h1>
        </div>
    )
}

export default Title;