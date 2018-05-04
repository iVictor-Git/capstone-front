import React from 'react';
import classes from './NavBarItem.css';

const NavBarItem = (props) => {
    const active = props.id === props.active ? classes.Active : null;
    return (
        <div className={[classes.NavBarItem, active].join(' ')}>
            {props.name}
        </div>
    )
}

export default NavBarItem;