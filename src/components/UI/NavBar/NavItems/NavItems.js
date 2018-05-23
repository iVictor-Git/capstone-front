import React from 'react';
import classes from './NavItems.css';
import NavItem from '../../SideDrawer/NavItem/NavItem';
import { navigationLinks } from '../../../../const/const';


const NavItems = (props) => {
    let navOptions = navigationLinks.map((option, index) => {
        return <NavItem key={index} name={option.name} route={option.route} />
    })

    return (
        <div className={classes.NavItems}>
            {navOptions}
        </div>
    );
}

export default NavItems;