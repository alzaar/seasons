import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      error: ''
    }
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
        this.setState({lng: position.coords.longitude})
      },
      err => {
          this.setState({ error: err.message })
      }
    )
    if (this.state.lat && this.state.lng) {
    return (
      <div className="App">
        <h1>Latitude: {this.state.lat}</h1>
        <h1>Longitude: {this.state.lng}</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Error: {this.state.error}</h1>
      </div>
    );
  }
  }
}

export default App;
