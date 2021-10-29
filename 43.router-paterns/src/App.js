import Food from "./Food";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      render={(routeParams) => <Food authenticated={true} {...routeParams} />}
      {/* <Route exact path="/food/:name" component={Food} /> - if u dont share props */}
    </div>
  );
}

export default App;
