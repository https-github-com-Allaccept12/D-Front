import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header, NotFound} from "./components";
import {Main, ArtWork, Dimo, MySpace, MyPosts} from "./page";

function App() {
  return (
    <div className="App w-full md:w-5/6 m-auto container">
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/artwork" component={ArtWork} />
            <Route exact path="/dimo" component={Dimo} />
            <Route exact path="/myspace" component={MySpace} />
            <Route exact path="/myposts" component={MyPosts} />
            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
