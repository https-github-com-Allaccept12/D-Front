import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header, NotFound } from "./NavComponents";
import { TendencyTest, MyInterests, Results, DimoDetail, DimoQNADetail, InlineDetail } from "./components";
import { CreateArtWork, CreateDimo } from "./creates"
import { Main, ArtWork, Dimo, MySpace, MyPosts, CreateProfile, CompleteProfile, KakaoRedirectHandler, LogOut, EditMySpace } from "./page";

function App() {
  return (

    <div className="App w-full m-auto overflow-y-hidden">
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/myposts" component={MyPosts} />
            
            <Route path={["/art","/art/:name"]} component={ArtWork} />

            <Route path={["/dimo/:name"]} component={Dimo} />

            <Route exact path={["/myspace", "/myspace/:name"]} component={MySpace} />
            
            
            <Route exact path="/tendencytest" component={TendencyTest} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/myinterests" component={MyInterests} />

            <Route exact path="/createprofile" component={CreateProfile} />
            <Route exact path="/completeprofile" component={CompleteProfile} />

            <Route path="/user/kakao/callback" component={KakaoRedirectHandler}/>

            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
