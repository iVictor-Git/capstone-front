import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Body from './components/Body/Body';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '',
        name: '',
      },
      api_keys: {},
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
    //     console.log(data);
    //     this.setState({ googApiKey: data.googleApiKey })
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
    return (
      <div className='app-container container-fluid'>
        <div className='row'>
          <NavBar />
          <Body
            onSignIn={this.loadUser}
            user={this.state.user}
            apis={this.state.googApiKey} />
          <SideBar />
        </div>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete"
          async></script>
      </div>
    );
  }
}

export default App;
