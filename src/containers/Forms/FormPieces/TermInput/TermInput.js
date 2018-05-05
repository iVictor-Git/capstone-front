import React from 'react';
import InputRow from '../InputRow/InputRow';
import classes from '../FormPieces.css';

const TermInput = ({ onChange }) => {

    const handleChange = (event) => {
        onChange(event);
    }
    return (
        <InputRow>
            <div style={{ width: '100%' }} className={classes.Term}>
                <input className={classes.Term} onChange={handleChange} id='terms-checkbox' type="checkbox" name='agree' />
                <label htmlFor='terms-checkbox' >You agree to our <span className='tos-pp' href='#'>Terms of Service</span> and <span className='tos-pp' href='#'>Privacy Policy</span>.</label>
            </div>
        </InputRow>
    );
}

export default TermInput