import React from 'react';
// import classes from './NavItems.css';
import NavBarItem from '../NavBarItem/NavBarItem';


const NavItems = ({ options }) => {
    const navOptions = options.map((option, index) => {
        return <NavBarItem key={index} name={option} id={index} active={0} />
    })
    return (
        navOptions
    )
}

export default NavItems;