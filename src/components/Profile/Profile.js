import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                basic: {
                    id: '',
                    first: '',
                    last: ''
                },
                contact: {
                    phone: {
                        area: '',
                        number: '',
                    },
                    social: []
                },
                account: {
                    email: '',
                }
            }
        }
    }

    render() {
        return (
            <div className='profile-component-container'>

            </div>
        )
    }
}

export default Profile;