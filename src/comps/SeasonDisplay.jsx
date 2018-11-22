import React from 'react';

const SeasonDisplay = props => {

    if (props.lat && props.lng) {
      console.log(props.lat)
    return (
      <div className="App">
        <h1>Latitude: {props.lat}</h1>
        <h1>Longitude: {props.lng}</h1>
      </div>
    );
  } else if (!props.error) {
    return (
      <div className="App">
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
    <div className="App">
      <h1>Error: {props.error}</h1>
    </div>
  );
  }

}

export default SeasonDisplay;
