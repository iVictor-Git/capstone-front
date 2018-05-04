import React from 'react';
import classes from './NavItem.css';

const NavItem = ({ name }) => {
    return (
        <div className={classes.NavItem}>
            {name}
        </div>
    )
}

export default NavItem;