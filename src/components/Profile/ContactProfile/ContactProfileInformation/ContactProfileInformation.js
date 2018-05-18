import React from 'react';
import ProfileField from '../../ProfileField/ProfileField';

const ContactProfileInformation = ({ className, phone, socials }) => {
    return (
        <div className={className}>
            {/* Field Component, value=x and name=x */}
            <ProfileField value={phone} name={'Number'} />
            <ProfileField value={socials} name={'Social'} />
        </div>
    )
}

export default ContactProfileInformation;