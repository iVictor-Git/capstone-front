import React from 'react';
import InputRow from '../InputRow/InputRow';

const AddressInput = ({ onChange, name, placeholder, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    let input = name === 'address2' ?
        <div className='form-group col-12 row'>
            <input className='form-control col-12' onChange={handleChange} type="text" placeholder={'Address 2'} name={'address2'} required />
        </div>
        :
        <div className='form-group col-12 row'>
            <input className='form-control col-12' id='autocomplete street_number route' onChange={handleChange} type="text" placeholder={'Address'} name={'address'} />
            <div className='text-danger'>{errors.address}</div>
        </div>

    return (
        <InputRow>
            {input}
        </InputRow>

    );
}

export default AddressInput

