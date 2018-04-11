import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-inner-container rounded'>

                <div className='register-form-container container'>
                    <div className='register-title'>
                        <h1>Register</h1>
                    </div>

                    <form>
                        {/* Name form component */}
                        <div className='row component-input-form-container'>
                            <div className='form-group col-6 row'>
                                <input className='form-control col-11' type="text" placeholder='First Name' />

                            </div>
                            <div className='form-group col-6 row'>
                                <input className='form-control col-12' type="text" placeholder='Last Name' />
                            </div>
                        </div>

                        {/* Address form component */}
                        <div className='row component-input-form-container'>
                            <div className='form-group col-12 row'>
                                <input className='form-control col-12' type="text" placeholder='Address' />
                            </div>
                        </div>
                        <div className='row component-input-form-container'>
                            <div className='form-group col-12 row'>
                                <input className='form-control col-12' type="text" placeholder='Address 2' />
                            </div>
                        </div>
                        <div className='row component-input-form-container'>
                            <div className='form-group col-4 row'>
                                <input className='form-control col-11' type="text" placeholder='City' />
                                <div className='col-1'></div>
                            </div>
                            <div className='form-group col-4 row'>
                                <input className='form-control col-11' type="text" placeholder='State' />
                                <div className='col-1'></div>
                            </div>
                            <div className='form-group col-4 row'>
                                <input className='form-control col-12' type="text" placeholder='Zip Code' />
                            </div>
                        </div>

                        {/* Phone form component */}
                        <div className='row component-input-form-container'>
                            <div className='form-group col-4 row'>
                                <input className='form-control col-11' type="text" placeholder='Area' />
                                <div className='col-1'></div>
                            </div>
                            <div className='form-group col-8 row'>
                                <input className='form-control col-12' type="text" placeholder='Number' />
                            </div>
                        </div>

                        {/* Email form component */}
                        <div className='row component-input-form-container'>
                            <div className='form-group col-12 row'>
                                <input className='form-control col-12' type="email" placeholder='Email' />
                            </div>
                        </div>

                        {/* Password form component */}
                        <div className='row component-input-form-container'>
                            <div className='form-group col-12 row'>
                                <input className='form-control col-12' type="password" placeholder='Password' />
                            </div>
                        </div>

                        <div className='row component-input-form-container'>
                            <div className='form-group col-12 row'>
                                <input className='form-control col-12' type="password" placeholder='Verify Password' />
                            </div>
                        </div>

                        {/* Terms form component */}
                        <div className='row component-input-form-container'>
                            <div className='form-group col-12 tos-container'>
                                <input className='form-control terms-checkbox' id='terms-checkbox' type="checkbox" placeholder='Verify Password' />
                                <label className='' htmlFor='terms-checkbox' >You agree to our <span className='tos-pp' href='#'>Terms of Service</span> and <span className='tos-pp' href='#'>Privacy Policy</span>.</label>
                            </div>
                        </div>

                        {/* button/submit component */}
                        <div className='row component-input-form-container'>
                            <div className='offset-4'></div>
                            <div className='form-group col-4 row'>
                                <input className='form-control col-12 component-submit' type="submit" value='Register' disabled />
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Register;