import React from 'react';
import Title from '../Title/Title';
import PersonalProfileInformation from '../PersonalProfileInformation/PersonalProfileInformation';

const AccountProfile = ({ address, address2, city, state, zip }) => {
    return (
        <React.Fragment>
            <Title
                value='Personal'
                className='profile-component-information-title-container' />

            <PersonalProfileInformation
                className='profile-component-information-group-container'
                address={address}
                address2={address2}
                city={city}
                state={state}
                zip={zip}
                />
        </React.Fragment>
    )
}

export default AccountProfile;