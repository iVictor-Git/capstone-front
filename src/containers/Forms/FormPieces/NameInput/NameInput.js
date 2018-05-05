import React from 'react';
import InputRow from '../InputRow/InputRow';
import classes from '../FormPieces.css';

const NameInput = ({ onChange, errors }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    // console.log(first);

    return (

        <InputRow>
            <div className={[classes.w45, classes.pr5].join(' ')}>
                <input
                    autoFocus
                    className={[classes.w100].join(' ')}
                    onChange={handleChange} type="text"
                    placeholder='First Name'
                    name='first' />
                <div className='text-danger'>{errors.first}</div>
            </div>
            <div className={classes.w45}>
                <input className={classes.w100} onChange={handleChange} type="text" placeholder='Last Name' name='last' />
                <div className='text-danger'>{errors.last}</div>
            </div>
        </InputRow>

    );
}

export default NameInput;