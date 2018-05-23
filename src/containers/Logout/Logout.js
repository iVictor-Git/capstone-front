import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    componentWillMount() {
        this.props.signOut();
    }

    render() {
        return (
            <Redirect
                to={{
                    pathname: '/login'
                }}
                push
            />)
    }
}

export default Logout;