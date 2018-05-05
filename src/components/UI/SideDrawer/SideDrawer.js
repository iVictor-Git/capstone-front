import React, { Component } from 'react';
import classes from '../NavBar/NavBar.css';
import NavItemList from './NavItemList/NavItemList';
import Toggle from './Toggle/Toggle';
import Backdrop from '../Backdrop/Backdrop';

class SideDrawer extends Component {
    state = {
        show: false
    }

    toggleHander = () => {
        this.setState((prevState) => {
            return { show: !prevState.show };
        });
    }

    render() {
        const navOptions = ['Home', 'About', 'Contact', 'Services', 'Products', 'Career', 'Help']
        const show = this.state.show ? classes.Show : classes.Hide;
        return (
            <React.Fragment>
                <Backdrop show={this.state.show} click={this.toggleHander} />
                <Toggle click={this.toggleHander} />
                <nav className={[classes.SideDrawer, show].join(' ')}>
                    <NavItemList options={navOptions} />
                </nav>
            </React.Fragment>
        )
    }
}
export default SideDrawer;