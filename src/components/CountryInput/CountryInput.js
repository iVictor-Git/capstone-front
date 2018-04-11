import React from 'react';
import InputRow from '../InputRow/InputRow';

const CountryInput = ({ onChange }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (

        <InputRow>
            <div className='form-group col-4 row'>
                <input className='form-control col-11' onChange={handleChange} type="text" placeholder='City' name='city' required/>
                <div className='col-1'></div>
            </div>
            <div className='form-group col-4 row'>
                <input className='form-control col-11' onChange={handleChange} type="text" placeholder='State' name='state' required/>
                <div className='col-1'></div>
            </div>
            <div className='form-group col-4 row'>
                <input className='form-control col-12' onChange={handleChange} type="text" placeholder='Zip Code' name='zip' required/>
            </div>
        </InputRow>

    );
}

export default CountryInput;