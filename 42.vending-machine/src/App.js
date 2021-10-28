import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
        <Route exact path="/soda" render={() => <Soda />} />
      </Switch>
    </div>
  );
}

export default App;
