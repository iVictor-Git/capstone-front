import React, { Component } from 'react';
import './Login.css';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import { errorsInitialState } from '../../const/const';
import validator from 'validator';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (data) => {
        this.props.onSubmit
    }

    render() {
        const { handleChange } = this;

        return (
            <div className='login-container'>
                <div className='login-inner-container rounded'>

                    <div className='login-form-container container'>
                        <div className='login-title'>
                            <h1>Login</h1>
                        </div>

                        <div className='container col-10 pt-2'>
                            <form className=''>
                                <EmailInput onChange={handleChange} errors={{email: ''}} autofocus={true}/>
                                <PasswordInput name='password' placeholder='Password' onChange={handleChange}  errors={{password: ''}} />
                                <div className='row component-input-form-container'>
                                    <div className='offset-4'></div>
                                    <div className='form-group col-4 row'>
                                        <input className='form-control col-12 component-submit' type="submit" value='Login' />
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

export default Login;