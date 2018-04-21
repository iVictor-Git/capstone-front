import React, { Component } from 'react';
import './Profile.css';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import ContentManager from '../ContentManager/ContentManager';
import ContentLoader from '../ContentLoader/ContentLoader';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: '',
            user: this.props.user
        }
    }

    handleContentChange = (event) => {
        this.setState({route: event.target.name}, () => {
            console.log(this.state.route);
        })
    }

    render() {
        
        return (

            <div className='profile-component-container'>

                <Title value='Profile' className='component-title-container' />

                {/* This is a component => Avatar */}
                <Avatar image={''} />

                <ContentManager onContentChange={this.handleContentChange}/>

                {/* This is a loaded container */}
                <ContentLoader route={this.state.route} user={this.state.user}/>
            </div>
        )
    }
}

export default Profile;