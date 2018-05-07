import React from 'react';
import classes from './NavItems.css';
import NavBarItem from '../NavBarItem/NavBarItem';
import NavItem from '../../SideDrawer/NavItem/NavItem';


const NavItems = (props) => {
    let navOptions = null;
    if (props.options !== undefined) {
        navOptions = props.options.map((option, index) => {
            return <NavItem key={index} name={option} />
        })
    }

    return (
        <div className={classes.NavItems}>
            {navOptions}
        </div>
    );
}

export default NavItems;