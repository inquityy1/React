import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/food/:name"
          render={(routeParams) => (
            <Food authenticated={true} {...routeParams} />
          )}
        />
        {/* <Route exact path="/food/:name" component={Food} /> - if u dont share props */}

        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
        {/* <Route exact path="/" render={(routeParams) => <FoodSearch {...routeParams} />} /> */}
        <Route exact path="/" component={FoodSearch} />
        <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
