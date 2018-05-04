import React from 'react';
import ProfileField from '../ProfileField/ProfileField';

const AccountProfileInformation = ({ className, email, password }) => {
    return (
        <div className={className}>
            {/* Field Component, value=x and name=x */}
            <ProfileField value={email} name={'Email'} />
            <ProfileField value={password} name={'Password'} />
        </div>
    )
}

export default AccountProfileInformation;