import React, { Component } from 'react';
import './Body.css';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'login',
        };
    }

    renderContent = (route) => {
        
    }

    handleSignIn = (user) => {
        this.props.onSignIn(user)
    }

    render() {
        const {handleSignIn } = this;
        return (
            <div className='body-container col-7'>
                <Home />
                <Register onSignIn={handleSignIn} />
                <Login onSignIn={handleSignIn} />
            </div>
        )
    }
}

export default Body;