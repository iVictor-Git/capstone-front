import React from 'react';
import Title from '../../Title/Title';
import BasicProfileInformation from './BasicProfileInformation/BasicProfileInformation';

const BasicProfile = ({ first, last, birthday }) => {
    return (
        <React.Fragment>
            <Title
                value='Basic'
                className='profile-component-information-title-container' />

            <BasicProfileInformation
                className='profile-component-information-group-container'
                first={first}
                last={last}
                birthday={birthday} />
        </React.Fragment>
    )
}

export default BasicProfile;