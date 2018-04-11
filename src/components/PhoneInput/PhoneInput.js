import React from 'react';
import InputRow from '../InputRow/InputRow';

const PhoneInput = ({ onChange }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (
        <InputRow>
            <div className='form-group col-4 row'>
                <input className='form-control col-11' onChange={handleChange} type="text" placeholder='Area' name='area' required/>
                <div className='col-1'></div>
            </div>
            <div className='form-group col-8 row'>
                <input className='form-control col-12' onChange={handleChange} type="text" placeholder='Number' name='number' required/>
            </div>
        </InputRow>
    );
}

export default PhoneInput;