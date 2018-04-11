import React, { Component } from 'react';
import './Body.css';
import Register from '../Register/Register';
// import Home from '../Home/Home';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'login',
        };
    }

    renderContent = (route) => {
        
    }

    render() {
        const { onElementClick } = this.props;
        return (
            <div onMouseEnter={onElementClick} className='body-container col-7'>
                {/* <Home /> */}
                <Register />
            </div>
        )
    }
}

export default Body;