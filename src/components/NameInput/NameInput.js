import React from 'react';
import InputRow from '../InputRow/InputRow';

const NameInput = ({ onChange }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (

        <InputRow>
            <div className='form-group col-6 row'>
                <input className='form-control col-11' onChange={handleChange} type="text" placeholder='First Name' name='first' required />
            </div>
            <div className='form-group col-6 row'>
                <input className='form-control col-12' onChange={handleChange} type="text" placeholder='Last Name' name='last' required />
            </div>
        </InputRow>

    );
}

export default NameInput;