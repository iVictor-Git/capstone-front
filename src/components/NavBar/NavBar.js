import React from 'react';
import './NavBar.css';
import NavItemList from '../NavItemList/NavItemList';

const NavBar = () => {

    const navOptions = ['Home', 'About', 'Contact', 'Services', 'Products', 'Career', 'Help']

    return (
        <div className='col-2 nav-bar-component-container nav-fixed'>
            <nav className='navbar-item-nav'>
                <NavItemList options={navOptions} />
            </nav>
        </div>
    )
}

export default NavBar;