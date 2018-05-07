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
      api_keys: {
        API_KEY: '',
        GOOGLE_PLACES_API_JS: ''
      },
    }
    // fetch(`http://localhost:3000/`, {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     password: '12345+12345'
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       API_KEY: data.API_KEY,
    //       GOOGLE_PLACES_API_JS: data.g_p_a_j
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
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
          api_keys={this.state.api_keys} />
      </div>
    );
  }
}

export default App;
