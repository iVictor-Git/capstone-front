import React from 'react';
import classes from './InputRow.css';

const InputRow = ({ children }) => {

    return (
        <div className={classes.InputRow}>
            {children}
        </div>
    );
}

export default InputRow;