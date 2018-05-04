import React from 'react';
import InputRow from '../InputRow/InputRow';

const PasswordInput = ({ onChange, name, placeholder, errors}) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (
        <InputRow>
            <div className='form-group col-12 row'>
                <input className='form-control col-12' onChange={handleChange} type="password" placeholder={placeholder} name={name} required/>
                <div className='text-danger'>{errors.password}</div>
            </div>
        </InputRow>
    );
}

export default PasswordInput;