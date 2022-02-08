import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.latitude}
        {this.state.errorMessage}{" "}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
