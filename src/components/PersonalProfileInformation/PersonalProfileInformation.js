import React from 'react';
import ProfileField from '../ProfileField/ProfileField';

const AccountProfileInformation = ({ className, address, address2, city, state, zip }) => {
    return (
        <div className={className}>
            {/* Field Component, value=x and name=x */}
            <ProfileField value={address} name={'Address'} />
            <ProfileField value={address2} name={'Address 2'} />
            <ProfileField value={city} name={'City'} />
            <ProfileField value={state} name={'State'} />
            <ProfileField value={zip} name={'Zip Code'} />
        </div>
    )
}

export default AccountProfileInformation;