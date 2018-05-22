import React, { Component } from 'react';
import classes from './Body.css';
import Home from './Home/Home';
import Register from '../../../containers/Forms/Register/Register';
import Login from '../../../containers/Forms/Login/Login';
import Chat from '../../Chat/Chat';
import ApartmentFinder from '../../../containers/ApartmentFinder/ApartmentFinder';
// import Profile from '../../Profile/Profile';
// import { defaultUserProfile } from '../../../const/const';

import { Route } from 'react-router-dom';


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
        const { handleSignIn } = this;
        return (
            <div className={classes.Body}>
                <Route path="/" exact render={() => {
                    return <Home />
                }}
                />

                <Route path="/register" exact render={() => {
                    return <Register onSignIn={handleSignIn} />
                }}
                />

                <Route path="/login" exact render={() => {
                    return <Login onSignIn={handleSignIn} />
                }}
                />

                <Route path="/chat" exact render={() => {
                    return <Chat user={this.props.user} />
                }}
                />

                <Route path="/search" exact render={() => {
                    return <ApartmentFinder />
                }}
                />

                <Route path="/construction" exact render={() => {
                    return <h3 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '75vh'
                    }}>This page is under construction...</h3>
                }}
                />
                {/* This will not be shown */}
                {/* <Profile
                    user={defaultUserProfile}
                // user={this.props.user} */}
            </div >
        )
    }
}

export default Body;