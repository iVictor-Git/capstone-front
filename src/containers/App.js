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
    if (user.id) {
      this.setState({
        user: {
          id: user.id,
          name: `${user.firstname} ${user.lastname}`,
          isLoggedIn: true
        }
      })
    }
    // console.log(`User loaded: ${this.state.user.name}`)
  }

  handleSignOut = () => {
    this.setState((prevState) => {
      if (prevState.user.isLoggedIn) {
        return {
          user: {
            id: '',
            name: '',
            isLoggedIn: false
          }
        }
      }
    })
  }

  render() {
    return (
      <div className={classes.App} >
        <NavBar />
        <SideDrawer authenticated={this.state.user.isLoggedIn} />
        <Body
          onSignIn={this.loadUser}
          user={this.state.user}
          onSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

export default App;
