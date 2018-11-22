import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    }
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
        this.setState({lng: position.coords.longitude})
      },
      err => console.log(err)
    )
    return (
      <div className="App">
        <h1>Latitude: {this.state.lat}</h1>
        <h1>Longitude: {this.state.lng}</h1>
      </div>
    );
  }
}

export default App;
