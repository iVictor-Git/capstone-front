import React, { Component } from 'react';
import BasicProfile from '../BasicProfile/BasicProfile';
import ContactProfile from '../ContactProfile/ContactProfile';
import AccountProfile from '../Profile/AccountProfile/AccountProfile';
import PersonalProfile from '../PersonalProfile/PersonalProfile';

const ContentLoader = ({ route, user }) => {

    const { basic, account, contact, personal } = user;

    const loadContent = (route) => {
        switch (route) {
            case 'basic':
                return <BasicProfile first={basic.first} last={basic.last} birthday={basic.birthday} />

            case 'contact':
                let socials = contact.social.map((account, index) => {
                    return <li key={index}>{account}</li>
                })
                const socialsList = <ul>{socials}</ul>
                return <ContactProfile
                    phone={`(${contact.phone.area}) ${contact.phone.number.slice(0, 3)} - ${contact.phone.number.slice(3)}`}
                    socials={socialsList} />
            case 'personal':
                return <AccountProfile email={account.email} password={account.password} />

            case 'other':
                return <PersonalProfile
                    address={personal.address}
                    address2={personal.address2}
                    city={personal.city}
                    state={personal.state}
                    zip={personal.zip}
                />
            default:
                return;
        }
    }

    return (
        <div className='profile-component-information-display-container'>
            {loadContent(route)}
        </div>

    )
}

export default ContentLoader;