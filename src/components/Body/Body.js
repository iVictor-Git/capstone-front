import React, { Component } from 'react';
import './Body.css';
import Home from '../Home/Home';

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
        const { state, onElementClick } = this.props;
        return (
            <div onMouseEnter={onElementClick} className='body-container col-7'>
                <Home />
            </div>
        )
    }
}

export default Body;