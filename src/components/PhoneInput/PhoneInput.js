import React from 'react';
import InputRow from '../InputRow/InputRow';

const PhoneInput = ({ onChange, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (
        <InputRow>
            <div className='form-group col-4 row'>
                <input className='form-control col-11' maxLength={3} onChange={handleChange} type="tel" placeholder='Area Code' name='area' required/>
                <div className='col-1'></div>
                <div className='text-danger'>{errors.area}</div>
            </div>
            <div className='form-group col-8 row'>
                <input className='form-control col-12' onChange={handleChange} maxLength={7} type="tel" placeholder='Number' name='number' required/>
                <div className='text-danger'>{errors.phone}</div>
            </div>
        </InputRow>
    );
}

export default PhoneInput;