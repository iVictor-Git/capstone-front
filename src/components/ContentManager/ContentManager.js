import React from 'react';
import classes from './ContentManager.css';

const ContentManager = ({ onContentChange }) => {
    return (
        <div className={classes.ContentManager}>
            {/*  These are going to be components */}
            <button className={classes.Button} name='basic' onClick={onContentChange}>Basic</button>
            <button className={classes.Button} name='contact' onClick={onContentChange}>Contact</button>
            <button className={classes.Button} name='personal' onClick={onContentChange}>Personal</button>
            <button className={classes.Button} name='other' onClick={onContentChange}>Other</button>
        </div>
    )
}

export default ContentManager;