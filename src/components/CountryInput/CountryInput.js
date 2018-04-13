import React from 'react';
import InputRow from '../InputRow/InputRow';
import { states } from '../../const/const';
const CountryInput = ({ onChange, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    const stateOptions = states.map((state, index) => {
        return <option key={index} value={state}>{state}</option>
    })
 
    return (
        <InputRow>
            <div className='form-group col-4 row'>
                <input className='form-control col-11' id='locality' onChange={handleChange} type="text" placeholder='City' name='city' required/>
                <div className='col-1'></div>
                <div className='text-danger'>{errors.city}</div>
            </div>
            <div className='form-group col-4 row'>
                <select className='form-control col-11' id='administrative_area_level_1' onChange={handleChange} name='state'>
                {stateOptions}
                </select>
                <div className='col-1'></div>
                <div className='text-danger'>{errors.state}</div>
            </div>
            <div className='form-group col-4 row'>
                <input className='form-control col-12' id='postal_code' onChange={handleChange} maxLength={5}type="text" placeholder='Zip Code' name='zip' required/>
                <div className='text-danger'>{errors.zip}</div>
            </div>
        </InputRow>

    );
}

export default CountryInput;