import React, { Component } from "react";

import "./DogList.css";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map((d) => (
              <div className="Dog col-lg-4 text-center" key={d.name}>
                <img src={d.src} alt={d.name} />
                <h3>{d.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DogList;
