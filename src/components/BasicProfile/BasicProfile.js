import React from 'react';
import Title from '../Title/Title';
import ProfileInformation from '../ProfileInformation/ProfileInformation';

const BasicProfile = ({ first, last, birthday }) => {
    return (
        <React.Fragment>
            <Title
                value='Basic'
                className='profile-component-information-title-container' />

            <ProfileInformation
                className='profile-component-information-group-container'
                first={first}
                last={last}
                birthday={birthday} />
        </React.Fragment>
    )
}

export default BasicProfile;