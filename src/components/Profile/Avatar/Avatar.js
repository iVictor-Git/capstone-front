import React from 'react';
import classes from './Avatar.css';

const Avatar = ({ image }) => {
    return (
        <div className={classes.Avatar} >
            <div className={classes.Container}>
                <img src="" alt="" />
            </div>
        </div >
    );
}

export default Avatar;