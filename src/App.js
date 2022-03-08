import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header, NotFound} from "./components";
import {Main} from "./page";

function App() {
  return (
    <div className="App">
      <div>dkdk</div>
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
