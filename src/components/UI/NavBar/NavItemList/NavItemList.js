import React from 'react';
import './NavItemList.css';
import NavItem from '../NavItem/NavItem'


const NavItemList = ({options}) => {
    const navOptions = options.map((option, index) => {
        return <NavItem key={index} name={option} />
    })
    return (
        <div className='nav-list-container'>
            {navOptions}
        </div>
    )
}

export default NavItemList;