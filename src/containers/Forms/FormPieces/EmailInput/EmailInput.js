import React from 'react';
import InputRow from '../InputRow/InputRow';
import classes from '../FormPieces.css';

const EmailInput = ({ onChange, errors, autofocus }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    // console.log(autofocus);

    return (
        <InputRow>
            <div style={{ width: '100%' }}>
                <input autoFocus={autofocus} onChange={handleChange} type="email" placeholder={'Email'} name={'email'} required />
                <div className='text-danger'>{errors.email}</div>
            </div>
        </InputRow>

    );
}

export default EmailInput;