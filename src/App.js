import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header, NotFound } from "./NavComponents";
import { TendencyTest, MyInterests, Results } from "./components";
import { Main, ArtWork, Dimo, MySpace, MyPosts, CreateProfile, CompleteProfile, KakaoRedirectHandler, LogOut } from "./page";
import { DimoQNADetail, DimoSharedDetail, DimoCreate } from "./components/Dimo"


function App() {
  return (
    <>
    <div id="modal"></div>
    <div id="root"></div>
    <div className="w-full m-auto App">
      <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/myposts" component={MyPosts} />
            
            <Route path={["/art","/art/:name"]} component={ArtWork} />

            <Route path={["/dimo/qna/:name", "/dimo/shared/:name"]} component={Dimo} />
            
            <Route exact path="/dimo/qnadetail" component={DimoQNADetail} />
            <Route exact path="/dimo/shareddetail" component={DimoSharedDetail} />
            <Route exact path="/dimo/create/:name" component={DimoCreate} />

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
    </>
  );
}

export default App;
