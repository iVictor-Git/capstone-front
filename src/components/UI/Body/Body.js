import React, { Component } from 'react';
import classes from './Body.css';
// import Home from './Home/Home';
import Register from '../../../containers/Forms/Register/Register';
// import Login from '../../../containers/Forms/Login/Login';
// import Chat from '../../Chat/Chat';
// import ApartmentFinder from '../../../containers/ApartmentFinder/ApartmentFinder';
// import Profile from '../../Profile/Profile';
// import { defaultUserProfile } from '../../const/const';


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
        const { api_keys } = this.props;
        return (
            <div className={classes.Body}>
                {/* <Home /> */}
                <Register onSignIn={handleSignIn} />
                {/* <Login onSignIn={handleSignIn} /> */}
                {/* <Chat user={this.props.user} /> */}
                {/* <ApartmentFinder api_keys={api_keys} /> */}
                {/* <Profile 
                user={defaultUserProfile}
                // user={this.props.user}
                /> */}
            </div >
        )
    }
}

export default Body;