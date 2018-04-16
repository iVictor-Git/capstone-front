import React, { Component } from 'react';
import './Body.css';
// import Home from '../Home/Home';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import Chat from '../Chat/Chat';
// import ApartmentFinder from '../ApartmentFinder/ApartmentFinder';
import Profile from '../Profile/Profile';

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
        // const { handleSignIn } = this;
        return (
            <div className='body-container col-7'>
                {/* <Home />
                <Register onSignIn={handleSignIn} /> */}
                {/* <Login onSignIn={handleSignIn} />
                <Chat user={this.props.user}/> */}
                {/* <ApartmentFinder /> */}
                <Profile user={this.props.user}/>
            </div>
        )
    }
}

export default Body;