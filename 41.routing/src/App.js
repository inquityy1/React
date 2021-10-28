import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";

import "./App.css";

const Hater = () => <h1>I ABSOLITELY HATE DOGS</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <Link to="/dog">Dog</Link>
          <Link to="/contact">contact</Link>
          <Link to="/">About</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/dog" exact component={Dog} />
          <Route path="/dog/hater" exact component={Hater} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
