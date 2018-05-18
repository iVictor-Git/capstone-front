import React from 'react';
import ProfileField from '../../ProfileField/ProfileField';

const BasicProfileInformation = ({ className, first, last, birthday }) => {
    return (
        <div className={className}>
            {/* Field Component, value=x and name=x */}
            <ProfileField value={first} name={'First'} />
            <ProfileField value={last} name={'Last'} />
            <ProfileField value={birthday} name={'Birthday'} />
        </div>
    )
}

export default BasicProfileInformation;