import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Body from './components/Body/Body';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: true,
    }
  }

  render() {
    return (
      <div className='app-container container-fluid'>
        <div className='row'>
          <NavBar />
          <Body />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;
