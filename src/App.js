import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './comps/SeasonDisplay'
class App extends Component {
  state = {
    lat: null,
    lng: null,
    error: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude, lng: position.coords.longitude})
        console.log(position)
      },
      err => this.setState({ error: err.message }),
    )
    console.log(this.state)

  }

  render() {
    return (
      <SeasonDisplay {...this.state} />
    );
  }
}

export default App;
