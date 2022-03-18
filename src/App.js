import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header, NotFound } from "./NavComponents";
import { TendencyTest, MyInterests, Results, DimoDetail, DimoQNADetail } from "./components";
import { CreateArtWork, CreateDimo } from "./creates"
import { Main, ArtWork, DimoQNA, DimoShared, MySpace, MyPosts, CreateProfile, KakaoRedirectHandler, LogOut, EditMySpace } from "./page";

function App() {
  return (
    <div className="App w-full m-auto">
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/artwork" component={ArtWork} />
            <Route exact path="/dimoqna" component={DimoQNA} />
            <Route exact path="/dimoshared" component={DimoShared} />
            <Route exact path="/myspace" component={MySpace} />
            <Route exact path="/editmyspace" component={EditMySpace} />
            <Route exact path="/myposts" component={MyPosts} />
            <Route exact path="/tendencytest" component={TendencyTest} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/myinterests" component={MyInterests} />

            <Route exact path="/createart" component={CreateArtWork} />
            <Route exact path="/createprofile" component={CreateProfile} />
            <Route exact path="/createdimo/qna" component={CreateDimo} />
            <Route exact path="/createdimo/shared" component={CreateDimo} />
            <Route exact path="/dimodetail" component={DimoDetail} />
            <Route exact path="/dimoqnadetail" component={DimoQNADetail} />
            <Route path="/user/kakao/callback" component={KakaoRedirectHandler}/>

            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
