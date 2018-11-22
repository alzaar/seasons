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
        this.setState({})
      },
      err => console.log(err)
    )
    return (
      <div className="App">
        {this.state.lat}
      </div>
    );
  }
}

export default App;
