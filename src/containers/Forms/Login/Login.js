import React, { Component } from 'react';
import classes from './Login.css';
import EmailInput from '../FormPieces/EmailInput/EmailInput';
import PasswordInput from '../FormPieces/PasswordInput/PasswordInput';
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
    setError = (errors = {}, name = '', ) => {
        errors[name].isNotValid = true;
        // errors[name].message = `${errors[name].field} ${error}`;
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
            this.setError(errors, name)
        } else {
            this.resetError(errors, name);
        }
    }

    // validate password /TODO see register => TLDR refactor to use inside this component AND register
    validatePassword = (errors, name) => {
        let fieldLength = this.state[name].length;
        if (fieldLength < 5) {
            this.setError(errors, name)
            if (!this.state[name]) {
                this.setError(errors, name)
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
        if (this.state.isValidForm) {
            const credentials = {
                email: this.state.email,
                password: this.state.password
            }
            fetch('http://localhost:3000/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })
                .then(response => response.json())
                .then(user => this.handleSignIn(user))
                .catch(err => console.log(err));
        }
    }

    handleSignIn = (user = { id: '', name: '' }) => {
        this.props.onSignIn(user);
        // console.log('User loaded');
    }

    render() {
        const { handleChange, handleSubmit } = this;
        const { errors } = this.state;
        const isDisabled = !this.state.isValidForm;

        return (
            <div className={classes.Login}>
                <div className={classes.Container}>

                    <div className={classes.Title}>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <div className={classes.Form}>
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
                                <div className={classes.Submit}>
                                    <input type="submit" value='Login' disabled={isDisabled} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;