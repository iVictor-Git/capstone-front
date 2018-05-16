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
      },

    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: `${user.firstname} ${user.lastname}`
      }
    })
    // console.log(`User loaded: ${this.state.user.name}`)
  }

  render() {
    const navOptions = ['Home', 'About', 'Contact', 'Services', 'Products', 'Career', 'Help']

    return (
      <div className={classes.App}>
        <NavBar options={navOptions} />
        <SideDrawer options={navOptions} />
        <Body
          onSignIn={this.loadUser}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
