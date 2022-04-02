import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Header, OHeader, NotFound, HeaderMini } from "./NavComponents";
import { TendencyTest, MyInterests, Result, CreateProfile } from "./components";
import { Main, ArtWork, Dimo, Login, LogOut, EditMySpace, MyPage } from "./page";
import { CompleteProfile } from "./components";
import { DimoQNADetail, DimoSharedDetail, DimoCreate } from "./components/Dimo";
import { ArtWorkWrite, ArtWorkCreate, ArtWorkInlineDetail } from "./components/ArtWorks";
import KakaoRedirectHandler from "./shared/KakaoRedirectHandler";

function App() {
    const location = useLocation();
    const a = location.pathname;
    return (
        <>
            <div id="modal"></div>
            <div id="root"></div>
            <div className="w-full m-auto App">
                {a === "/" && (
                    <>
                        <Header />
                        <HeaderMini />
                    </>
                )}

                {(a === "/tendencytest") | (a === "/") ? "" : <OHeader />}

                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Main" component={Main} />
                    <Route exact path="/logout" component={LogOut} />
                    <Route exact path="/Login" component={Login} />

                    <Route path={["/art", "/art/:name"]} component={ArtWork} />
                    <Route exact path="/createart" component={ArtWorkCreate} />
                    <Route exact path="/detailart/:name" component={ArtWorkInlineDetail} />
                    <Route path={["/dimo/qna/:name", "/dimo/info/:name"]} component={Dimo} />

                    <Route exact path="/dimo/qnadetail" component={DimoQNADetail} />
                    <Route exact path="/dimo/shareddetail" component={DimoSharedDetail} />
                    <Route exact path="/dimo/create/:name" component={DimoCreate} />

                    <Route exact path={["/myspace", "/myspace/:name"]} component={MyPage} />

                    <Route exact path={["/editmyspace", "/editmyspace/:name"]} component={EditMySpace} />

                    <Route exact path="/tendencytest" component={TendencyTest} />

                    <Route exact path="/Result/:name" component={Result} />
                    <Route exact path="/myinterests" component={MyInterests} />
                    <Route exact path="/createprofile" component={CreateProfile} />
                    <Route exact path="/completeprofile" component={CompleteProfile} />
                    <Route path="/user/kakao/callback" component={KakaoRedirectHandler} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        </>
    );
}

export default App;
