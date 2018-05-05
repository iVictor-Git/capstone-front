import React from 'react';
import InputRow from '../InputRow/InputRow';

const PasswordInput = ({ onChange, name, placeholder, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (
        <InputRow>
            <div style={{ width: '100%' }}>
                <input onChange={handleChange} type="password" placeholder={placeholder} name={name} required />
                <div className='text-danger'>{errors.password}</div>
            </div>
        </InputRow>
    );
}

export default PasswordInput;