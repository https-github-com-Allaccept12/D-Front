import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header, NotFound} from "./components";
import {Main, ArtWork, Dimo, MySpace, MyPosts, CreateArtWork, CreateProfile, KakaoRedirectHandler} from "./page";


function App() {
  return (
    <div className="App w-full md:w-5/6 m-auto container grid">
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/artwork" component={ArtWork} />
            <Route exact path="/dimo" component={Dimo} />
            <Route exact path="/myspace" component={MySpace} />
            <Route exact path="/myposts" component={MyPosts} />
            <Route exact path="/createart" component={CreateArtWork} />
            <Route exact path="/createprofile" component={CreateProfile} />
            {/* <Route exact path="/user/kakao/callback" component={KakaoRedirectHandler}/> */}
            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
