import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne BAD!!!
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      BAD!!!
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" exact={true} component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
