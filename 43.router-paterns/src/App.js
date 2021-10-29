import Food from "./Food";
import Meal from "./Meal";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/food/:name"
        render={(routeParams) => <Food authenticated={true} {...routeParams} />}
      />
      {/* <Route exact path="/food/:name" component={Food} /> - if u dont share props */}

      <Route path="/food/:foodName/drink/:drinkName" component={Meal} />
    </div>
  );
}

export default App;
