import React, { Component } from 'react';
import SideDrawer from '../components/UI/SideDrawer/SideDrawer';
import classes from './App.css';
import Body from '../components/UI/Body/Body';
import NavBar from '../components/UI/NavBar/NavBar';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '',
        name: '',
        isLoggedIn: false,
      },

    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: `${user.firstname} ${user.lastname}`,
        isLoggedIn: true
      }
    })
    // console.log(`User loaded: ${this.state.user.name}`)
  }

  render() {
    return (
      <div className={classes.App}>
        <NavBar />
        <SideDrawer />
        <Body
          onSignIn={this.loadUser}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
