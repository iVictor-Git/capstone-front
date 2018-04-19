import React, { Component } from 'react';
import './Profile.css';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import BasicProfile from '../BasicProfile/BasicProfile';
import ContactProfile from '../ContactProfile/ContactProfile';
import AccountProfile from '../AccountProfile/AccountProfile';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    render() {
        const { basic, account, contact, personal } = this.state.user;
        const socials = contact.social.map((account, index) => {
            return <li key={index}>{account}</li>
        })
        const socialsList = <ul>{socials}</ul>
        return (

            <div className='profile-component-container'>

                <Title value='Profile' className='component-title-container' />

                {/* This is a component => Avatar */}
                <Avatar image={''} />

                <div className='profile-component-information-container'>
                    {/*  These are going to be components */}
                    <div className='profile-component-information-type-container'>Basic</div>
                    <div className='profile-component-information-type-container'>Contact</div>
                    <div className='profile-component-information-type-container'>Personal</div>
                    <div className='profile-component-information-type-container'>Other</div>
                </div>
                {/* This is a loaded container */}
                <div className='profile-component-information-display-container'>
                    <BasicProfile first={basic.first} last={basic.last} birthday={basic.birthday} />
                </div>

                <div className='profile-component-information-display-container'>
                    <ContactProfile
                        phone={`(${contact.phone.area}) ${contact.phone.number.slice(0, 3)} - ${contact.phone.number.slice(3)}`}
                        socials={socialsList} />
                </div>

                <div className='profile-component-information-display-container'>
                    {/* This will be moved to something called settings */}
                    <AccountProfile email={account.email} password={account.password} />
                </div>

                <div className='profile-component-information-display-container'>
                    <div className='profile-component-information-title-container'>
                        <h2>
                            {`Personal`}
                        </h2>
                    </div>

                    <div className='profile-component-information-group-container'>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Address`}: </div>
                            <div className='profile-component-information-50'>{personal.address}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Address 2`}: </div>
                            <div className='profile-component-information-50'>{personal.address2}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`City`}: </div>
                            <div className='profile-component-information-50'>{personal.city}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`State`}: </div>
                            <div className='profile-component-information-50'>{personal.state}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Zip Code`}: </div>
                            <div className='profile-component-information-50'>{personal.zip}</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;