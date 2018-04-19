import React, { Component } from 'react';
import './Profile.css';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import BasicProfile from '../BasicProfile/BasicProfile';

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
        return (

            <div className='profile-component-container'>

                <Title value='Profile' className='component-title-container'/>

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
                {/* another piece similar to above */}
                <div className='profile-component-information-display-container'>
                    <div className='profile-component-information-title-container'>
                        <h2>
                            {`Contact`}
                        </h2>
                    </div>

                    <div className='profile-component-information-group-container'>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Phone`}: </div>
                            <div className='profile-component-information-50'>{`(${contact.phone.area}) ${contact.phone.number.slice(0, 3)} - ${contact.phone.number.slice(3)}`}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Social`}: </div>
                            <div className='profile-component-information-50'><ul>{socials}</ul></div>
                        </div>
                    </div>
                </div>

                <div className='profile-component-information-display-container'>
                    <div className='profile-component-information-title-container'>
                        <h2>
                            {`Account`}
                        </h2>
                    </div>

                    <div className='profile-component-information-group-container'>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Email`}: </div>
                            <div className='profile-component-information-50'>{account.email}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Password`}: </div>
                            <div className='profile-component-information-50'>{account.password}</div>
                        </div>
                    </div>
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