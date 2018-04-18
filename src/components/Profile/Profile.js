import React, { Component } from 'react';
import './Profile.css';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';

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

                <Title value='Profile' />

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
                    {/* title component with title=x */}
                    <div className='profile-component-information-title-container'>
                        <h2>
                            {`Basic`}
                        </h2>
                    </div>

                    <div className='profile-component-information-group-container'>
                        {/* Field Component, value=x and name=x */}
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`First`}: </div>
                            <div className='profile-component-information-50'>{basic.first}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Last`}: </div>
                            <div className='profile-component-information-50'>{basic.last}</div>
                        </div>
                        <div className='capstone-row'>
                            <div className='profile-component-information-25'>{`Birthday`}: </div>
                            <div className='profile-component-information-50'>{basic.birthday}</div>
                        </div>
                    </div>
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