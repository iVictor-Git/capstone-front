import React from 'react';
import InputRow from '../InputRow/InputRow';

const EmailInput = ({ onChange, errors, autofocus }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    // console.log(autofocus);

    return (
        <InputRow>
            <div className='form-group col-12 row'>
                <input className='form-control col-12' autoFocus={autofocus} onChange={handleChange} type="email" placeholder={'Email'} name={'email'} required />
                <div className='text-danger'>{errors.email}</div>
            </div>
        </InputRow>

    );
}

export default EmailInput;