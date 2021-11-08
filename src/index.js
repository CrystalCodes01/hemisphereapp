import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div className="ui container comments">Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
