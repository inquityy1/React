import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

class App extends React.Component {
  onSearchSubmit = (entry) => {
    console.log(entry);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
