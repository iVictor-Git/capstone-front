import React from 'react';

const ProfileField = ({name, value}) => {
    return (
        <div className='capstone-row'>
            <div className='profile-component-information-25'>{name}: </div>
            <div className='profile-component-information-50'>{value}</div>
        </div>
    )

}

export default ProfileField;