import React, { Component } from 'react';
import './Profile.css';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import ContentManager from '../ContentManager/ContentManager';
import BasicProfile from '../BasicProfile/BasicProfile';
import ContactProfile from '../ContactProfile/ContactProfile';
import AccountProfile from '../AccountProfile/AccountProfile';
import PersonalProfile from '../PersonalProfile/PersonalProfile';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: '',
            user: this.props.user
        }
    }

    handleContentChange = (event) => {
        this.setState({route: event.target.name})
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

                <ContentManager onContentChange={this.handleContentChange}/>

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
                    <PersonalProfile
                        address={personal.address}
                        address2={personal.address2}
                        city={personal.city}
                        state={personal.state}
                        zip={personal.zip}
                    />
                </div>

            </div>
        )
    }
}

export default Profile;