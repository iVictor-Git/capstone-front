import React from 'react';
import classes from './Toggle.css';

const Toggle = (props) => (
    <div className={classes.Toggle} onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Toggle;