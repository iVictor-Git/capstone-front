import React from 'react';
import classes from './NavItem.css';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <Link className={classes.NavItem}
            to={{
                pathname: props.route
            }}
        >
            <div>
                {props.name}
            </div>
        </Link>
    )
}

export default NavItem;