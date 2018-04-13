import React from 'react';
import InputRow from '../InputRow/InputRow';

const NameInput = ({ onChange, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    // console.log(first);

    return (

        <InputRow>
            <div className='form-group col-6 row'>
                <input 
                autoFocus
                className='form-control col-11' 
                onChange={handleChange} type="text" 
                placeholder='First Name' 
                name='first' />
                <div className='text-danger'>{errors.first}</div>
            </div>
            <div className='form-group col-6 row'>
                <input className='form-control col-12' onChange={handleChange} type="text" placeholder='Last Name' name='last' />
                <div className='text-danger'>{errors.last}</div>
            </div>
        </InputRow>

    );
}

export default NameInput;