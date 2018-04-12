import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Body from './components/Body/Body';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googApiKey: '',
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

  render() {
    return (
      <div className='app-container container-fluid'>
        <div className='row'>
          <NavBar />
          <Body googleApiKey={this.state.googApiKey} />
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
