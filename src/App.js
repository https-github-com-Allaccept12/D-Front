import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header, NotFound, TendencyTest, Results, MyInterests, DimoDetail, DimoQNADetail } from "./components";
import {Main, ArtWork, Dimo, MySpace, MyPosts, CreateArtWork, CreateProfile, KakaoRedirectHandler, LogOut, EditMySpace, CreateDimo } from "./page";


function App() {
  return (
    <div className="App w-full md:w-5/6 m-auto container">
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/artwork" component={ArtWork} />
            <Route exact path="/dimo" component={Dimo} />
            <Route exact path="/myspace" component={MySpace} />
            <Route exact path="/editmyspace" component={EditMySpace} />
            <Route exact path="/myposts" component={MyPosts} />
            <Route exact path="/createart" component={CreateArtWork} />
            <Route exact path="/tendencytest" component={TendencyTest} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/myinterests" component={MyInterests} />
            <Route exact path="/createprofile" component={CreateProfile} />
            <Route exact path="/createdimo" component={CreateDimo} />
            <Route exact path="/dimodetail" component={DimoDetail} />
            <Route exact path="/dimoqnadetail" component={DimoQNADetail} />
            <Route path="/user/kakao/callback" component={KakaoRedirectHandler}/>
            <Route exact path="/Main" component={Main} />
            <Route exact path="/logout" component={LogOut} />
        </Switch>
    </div>
  );
}

export default App;
