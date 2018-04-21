import React from 'react';
import './ContentManager.css';

const ContentManager = ({ onContentChange }) => {
    return (
        <div className='profile-component-information-container'>
            {/*  These are going to be components */}
            <button className='profile-component-information-type-container' name='basic' onClick={onContentChange}>Basic</button>
            <button className='profile-component-information-type-container' name='contact' onClick={onContentChange}>Contact</button>
            <button className='profile-component-information-type-container' name='personal' onClick={onContentChange}>Personal</button>
            <button className='profile-component-information-type-container' name='other' onClick={onContentChange}>Other</button>
        </div>
    )
}

export default ContentManager;