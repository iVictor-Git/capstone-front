import React from 'react';
import ContactProfileInformation from './ContactProfileInformation/ContactProfileInformation';
import Title from '../../Title/Title';

const ContactProfile = ({ phone, socials }) => {
    return (
        <React.Fragment>
            <Title
                value='Contact'
                className='profile-component-information-title-container' />

            <ContactProfileInformation
                className='profile-component-information-group-container'
                phone={phone}
                socials={socials}
            />
        </React.Fragment>

    )
}

export default ContactProfile;