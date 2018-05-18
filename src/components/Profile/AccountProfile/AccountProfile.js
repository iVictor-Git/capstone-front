import React from 'react';
import Title from '../../Title/Title';
import AccountProfileInformation from './AccountProfileInformation/AccountProfileInformation';

const AccountProfile = ({ email, password }) => {
    return (
        <React.Fragment>
            <Title
                value='Account'
                className='profile-component-information-title-container' />

            <AccountProfileInformation
                className='profile-component-information-group-container'
                email={email}
                password={password}
            />
        </React.Fragment>
    )
}

export default AccountProfile;