import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './comps/SeasonDisplay'
import Loader from './comps/Loader';

class App extends Component {
  state = {
    lat: null,
    lng: null,
    error: '',
    date: (new Date()).getMonth()
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
  const renderContent = () => {
    if (this.state.error && !this.state.lat) {
      return <div><h1>Error: {this.state.error}</h1></div>;
    }
    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay {...this.state} />
    }

    return <Loader/>;
  }

  render() {
      return (
        <div className="border-red">
          {this.renderContent}
        </div>
      );
  }
}

export default App;
