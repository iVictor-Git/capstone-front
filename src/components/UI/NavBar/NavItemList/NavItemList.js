import React from 'react';
import classes from './NavItemList.css';
import NavItem from '../NavItem/NavItem'


const NavItemList = ({ options }) => {
    const navOptions = options.map((option, index) => {
        return <NavItem key={index} name={option} />
    })
    return (
        <div className={classes.NavItemList}>
            {navOptions}
        </div>
    )
}

export default NavItemList;