import React from 'react';
import InputRow from '../InputRow/InputRow';
import classes from '../FormPieces.css';

const AddressInput = ({ onChange, name, placeholder, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    let input = name === 'address2' ?
        <div style={{ width: '100%' }}>
            <input
                onChange={handleChange}
                type="text"
                placeholder={'Address 2'}
                name={'address2'}
            />
        </div >
        :
        <div style={{ width: '100%' }}>
            <input
                id='autocomplete street_number route'
                onChange={handleChange}
                type="text" placeholder={'Address'}
                name={'address'} required
            />
            <div className='text-danger'>{errors.address}</div>
        </div>

    return (
        <InputRow>
            {input}
        </InputRow>

    );
}

export default AddressInput

