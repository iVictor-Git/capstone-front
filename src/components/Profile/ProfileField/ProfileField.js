import React from 'react';
import classes from './ProfileField.css';

const ProfileField = ({ name, value }) => {
    return (
        <div className={classes.ProfileField}>
            <div className='profile-component-information-25'>{name}: </div>
            <div className='profile-component-information-50'>{value}</div>
        </div>
    )

}

export default ProfileField;