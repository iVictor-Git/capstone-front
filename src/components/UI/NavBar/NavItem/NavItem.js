import React from 'react';
import './NavItem.css';

const NavItem = ({ name }) => {
    return (
        <div className='nav-item-container'>
            <div className='nav-item-text-container btn'>
                <div className='nav-item-text-box'>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default NavItem;