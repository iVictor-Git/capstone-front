import React, { Component } from 'react';
import './Login.css';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import validator from 'validator';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: {
                    field: '*Email',
                    isNotValid: true,
                    message: ''
                },
                password: {
                    field: '*Password',
                    isNotValid: true,
                    message: ''
                },
            },
            isValidForm: false

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

    //validate form /TODO see register => TLDR refactor to use inside this component AND register
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

    // validate email using validator lib /TODO see register => TLDR refactor to use inside this component AND register
    validateEmail = (errors = {}, name = '') => {

        // console.log(validator.isEmail(this.state[name]));
        if (!validator.isEmail(this.state[name])) {
            this.setError(errors, name, 'must be a valid email.')
        } else {
            this.resetError(errors, name);
        }
    }

    // validate password /TODO see register => TLDR refactor to use inside this component AND register
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
    }

    handleDataValidation = (name) => {
        const errors = this.state.errors;

        if (name === 'password' || name === 'verify') {
            this.validatePassword(errors, name);
        }
        if (name === 'email') {
            this.validateEmail(errors, name);
        }
        this.setState({ errors }, () => {
            this.validateForm()
        })
    }

    handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        this.setState({
            [name]: value
        }, () => {
            this.handleDataValidation(name);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { handleChange, handleSubmit } = this;
        const { errors } = this.state;
        const isDisabled = !this.state.isValidForm;

        return (
            <div className='login-container'>
                <div className='login-inner-container rounded container'>

                    <div className='login-title'>
                        <h1>Login</h1>
                    </div>
                    <div className='login-inner-inner-container rounded'>

                        <div className='login-form-container container'>

                            <div className='container col-9 pt-2'>
                                <form className='' onSubmit={handleSubmit}>
                                    <EmailInput onChange={handleChange}
                                        errors={{
                                            email: errors.email.message,
                                        }}
                                        autofocus={true} />
                                    <PasswordInput name='password' placeholder='Password' onChange={handleChange}
                                        errors={{
                                            password: errors.password.message,
                                        }} />
                                    <div className='row component-input-form-container login-submit-container'>
                                        <div className=''></div>
                                        <div className='form-group col-4 row'>
                                            <input className='form-control col-12 component-submit' type="submit" value='Login' disabled={isDisabled} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;