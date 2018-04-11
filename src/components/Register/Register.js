import React, { Component } from 'react';
import './Register.css';
import NameInput from '../NameInput/NameInput';
import AddressInput from '../AddressInput/AddressInput';
import CountryInput from '../CountryInput/CountryInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import TermInput from '../TermInput/TermInput';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            area: '',
            number: '',
            email: '',
            password: '',
            verify: '',
            agree: false,
        }
    }

handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        const {handleChange} = this;
        return (
            <div className='register-container'>
                <div className='register-inner-container rounded'>

                    <div className='register-form-container container'>
                        <div className='register-title'>
                            <h1>Register</h1>
                        </div>

                        <div className='container col-10 pt-2'>
                            <form className='' onSubmit={this.handleSubmit}>
                                <NameInput onChange={handleChange} />

                                <AddressInput onChange={handleChange} name={'address'}/>
                                <AddressInput onChange={handleChange} name={'address2'}/>
                                
                                <CountryInput onChange={handleChange} />

                                <PhoneInput onChange={handleChange} />

                                <EmailInput onChange={handleChange} />

                                <PasswordInput name='password' placeholder='Password' onChange={handleChange} />
                                <PasswordInput name='Password' placeholder='Verify' onChange={handleChange} />

                                {/* Terms form component */}
                                <TermInput onChange={handleChange} />

                                {/* button/submit component */}
                                <div className='row component-input-form-container'>
                                    <div className='offset-4'></div>
                                    <div className='form-group col-4 row'>
                                        <input className='form-control col-12 component-submit' type="submit" value='Register' disabled={!this.state.agree} />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Register;