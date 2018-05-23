import React from 'react';
import classes from './NavItemList.css';
import NavItem from '../NavItem/NavItem'
import { navigationLinks } from '../../../../const/const';
import LogoutButton from '../../LogoutButton/LogoutButton'

const NavItemList = (props) => {
    const navOptions = navigationLinks.map((option, index) => {
        return <NavItem key={index} name={option.name} route={option.route} />
    })

    return (
        <div className={classes.NavItemList}>
            {navOptions}
            <LogoutButton authenticated={props.authenticated} />
        </div>
    )
}

export default NavItemList;