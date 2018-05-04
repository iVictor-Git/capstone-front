import React, { Component } from 'react';
import './Register.css';
import NameInput from '../NameInput/NameInput';
import AddressInput from '../AddressInput/AddressInput';
import CountryInput from '../CountryInput/CountryInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import TermInput from '../TermInput/TermInput';
import { errorsRegisterInitialState  } from '../../const/const';
import validator from 'validator';
import {states} from '../../const/const';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            address: '',
            address2: '',
            city: '',
            state: states[0],
            zip: '',
            area: '',
            number: '',
            email: '',
            password: '',
            verify: '',
            agree: false,
            errors: errorsRegisterInitialState,
            isValidForm: false,
        }
    }

    // set errors
    setError = (errors = {}, name = '', error = '') => {
        errors[name].isNotValid = true;
        errors[name].message = `${errors[name].field} ${error}`;
    }

    //reset errors
    resetError = (errors = {}, name = '') => {
        errors[name].isNotValid = false;
        errors[name].message = ``;
    }

    //validate form /TODO refactor to be useable in Login component
    validateForm = () => {
        let isValid = true;
        for (const key in this.state.errors) {
            if (this.state.errors[key].isNotValid) {
                isValid = false
            }
        }
        this.setState({ isValidForm: isValid }, () => {
            return;
        });
    }

    // validate email using validator lib /TODO refactor to be useable in Login component
    validateEmail = (errors = {}, name = '') => {

        // console.log(validator.isEmail(this.state[name]));
        if (!validator.isEmail(this.state[name])) {
            this.setError(errors, name, 'must be a valid email.')
        } else {
            this.resetError(errors, name);
        }
    }

    // validate password /TODO refactor to be useable in Login component
    validatePassword = (errors, name) => {
        let fieldLength = this.state[name].length;
        if (fieldLength < 8) {
            this.setError(errors, name, `must be 8 or more characters. Current length: ${fieldLength}`)
            if (!this.state[name]) {
                this.setError(errors, name, 'is required.')
            }
        } else {
            this.resetError(errors, name)
            // console.log(errors[name].message);
        }

        if (this.state[name] !== this.state.verify) {
            this.setError(errors, 'verify', 'must match password.');
        }

        if (this.state.verify !== this.state.password) {
            this.setError(errors, 'verify', 'must match password.');
        }
        else {
            this.resetError(errors, 'verify');
        }
    }

    handleDataValidation = (name) => {
        const errors = errorsRegisterInitialState;

        if (name === 'address2') return;
        if (name === 'password' || name === 'verify' || name === 'email') {
            if (name === 'password' || name === 'verify') {
                this.validatePassword(errors, name);
            }
            if (name === 'email') {
                this.validateEmail(errors, name);
            }
        }
        else {
            if (!this.state[name]) {
                errors[name].isNotValid = true;
                errors[name].message = `${errors[name].field} is required`;
            } else {
                this.resetError(errors, name);
            }
        }

        this.setState({ errors }, () => {
            this.validateForm()
        })
    }

    handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // console.log(target.value);
        const { name } = target;

        this.setState({
            [name]: value
        }, () => {
            // setTimeout(50);
            this.handleDataValidation(name)
        });

    }

    handleSignIn = (user) => {
        this.props.onSignIn(user);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.isValidForm && this.state.agree) {
            let user = {
                first: this.state.first,
                last: this.state.last,
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                area: this.state.area,
                number: this.state.number,
                email: this.state.email,
                password: this.state.password,
                verify: this.state.verify,
                agree: this.state.agree,
            }
            fetch('http://localhost:3000/register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })
                .then(response => response.json())
                .then(user => {
                    this.props.onSignIn(user)
                })
                .catch(err => console.log('something went wrong sending to server'));
        }
        else {
            alert('You must fill out the form in order to submit this form');
        }
    }

    render() {
        const { handleChange } = this;
        const { errors } = this.state;
        const isDisabled = !this.state.isValidForm || !this.state.agree;
        // console.log(this.state.isValidForm, this.state.agree);

        return (
            <div className='register-container'>
                <div className='register-inner-container rounded'>

                    <div className='register-form-container container'>
                        <div className='register-title'>
                            <h1>Register</h1>
                        </div>

                        <div className='container col-10 pt-2'>
                            <form className='' onSubmit={this.handleSubmit}>
                                <NameInput onChange={handleChange}
                                    errors={
                                        {
                                            first: errors.first.message,
                                            last: errors.last.message,
                                        }} />

                                <AddressInput onChange={handleChange} name='address' errors={{ address: errors.address.message }} />

                                < AddressInput onChange={handleChange} name={'address2'} errors={{ address: null }} />

                                <CountryInput onChange={handleChange}
                                    errors={{
                                        city: errors.city.message,
                                        state: errors.state.message,
                                        zip: errors.zip.message,
                                    }} />

                                <PhoneInput onChange={handleChange}
                                    errors={{
                                        area: errors.area.message,
                                        phone: errors.number.message,
                                    }} />

                                <EmailInput onChange={handleChange}
                                    errors={{
                                        email: errors.email.message,
                                    }} />

                                <PasswordInput name='password' placeholder='Password' onChange={handleChange}
                                    errors={{
                                        password: errors.password.message,
                                    }} />
                                <PasswordInput name='verify' placeholder='Verify' onChange={handleChange}
                                    errors={{
                                        password: errors.verify.message,
                                    }} />

                                {/* Terms form component */}
                                <TermInput onChange={handleChange} />

                                {/* button/submit component */}
                                <div className='row component-input-form-container'>
                                    <div className='offset-4'></div>
                                    <div className='form-group col-4 row'>
                                        <input className='form-control col-12 component-submit' type="submit" value='Register' disabled={isDisabled} />
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