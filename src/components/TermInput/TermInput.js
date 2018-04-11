import React from 'react';
import InputRow from '../InputRow/InputRow';

const TermInput = ({ onChange }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (
        <InputRow>
            <div className='form-group col-12 tos-container'>
                <input className='form-control terms-checkbox' onChange={handleChange} id='terms-checkbox' type="checkbox" name='agree' />
                <label className='' htmlFor='terms-checkbox' >You agree to our <span className='tos-pp' href='#'>Terms of Service</span> and <span className='tos-pp' href='#'>Privacy Policy</span>.</label>
            </div>
        </InputRow>
    );
}

export default TermInput