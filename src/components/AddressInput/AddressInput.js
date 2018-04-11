import React from 'react';
import InputRow from '../InputRow/InputRow';

const AddressInput = ({ onChange, name, placeholder }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    const input = name === 'address2' ?
        <input className='form-control col-12' onChange={handleChange} type="text" placeholder={'Address 2'} name={'address2'} />
        :
        <input className='form-control col-12' onChange={handleChange} type="text" placeholder={'Address'} name={'address'} required />;

    return (
        <InputRow>
            <div className='form-group col-12 row'>
            {input}
            </div>
        </InputRow>

    );
}

export default AddressInput

