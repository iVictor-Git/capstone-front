import React from 'react';
import classes from './NavBar.css';
import NavItems from './NavItems/NavItems';

const NavBar = (props) => {
    return (
        <nav className={classes.NavBar}>
            <NavItems />
        </nav>
    )
}

export default NavBar;