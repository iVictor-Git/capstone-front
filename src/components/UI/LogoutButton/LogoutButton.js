import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../SideDrawer/NavItem/NavItem.css';

const LogoutButton = (props) => {
    let button = (
        <Link
            to={{
                pathname: props.authenticated ? '/logout' : '/login',
            }}
        >
            <div className={classes.NavItem}>
                {props.authenticated ? 'Logout' : 'Login'}
            </div>
        </Link>
    )

    return button
}

export default LogoutButton;