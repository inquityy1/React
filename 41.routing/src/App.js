import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
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
          <NavLink exact activeClassName="active-link" to="/dog/r">
            Dog(r)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/c">
            Dog(c)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">
            contact
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/">
            About
          </NavLink>
        </nav>
        <Switch>
          {/* <Route path="/" exact component={About} /> */}
          {/* <Route path="/dog/hater" exact component={Hater} /> */}
          {/* <Route path="/Contact" exact component={Contact} /> */}
          {/* ================================================ */}
          {/* Component will instantiate a new Dog every time */}
          <Route exact path="/dog/c" component={() => <Dog name="Zuca" />} />
          {/* Render will re-use the existing dog component */}
          <Route exact path="/dog/r" render={() => <Dog name="Bleki" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
