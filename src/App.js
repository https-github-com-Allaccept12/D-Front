import React, { useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Header, OHeader, NotFound, HeaderMini, Footer } from "./NavComponents";
import { TendencyTest, MyInterests, Result, CreateProfile } from "./components";
import { Main, ArtWork, Dimo, Login, LogOut, EditMySpace, MyPage } from "./page";
import { CompleteProfile } from "./components";
import { DimoQNADetail, DimoSharedDetail, DimoCreate } from "./components/Dimo";
import { ArtWorkWrite, ArtWorkCreate, ArtWorkInlineDetail } from "./components/ArtWorks";
import { useSelector } from "react-redux";
import KakaoRedirectHandler from "./shared/KakaoRedirectHandler";
import ReactGA from "react-ga";

ReactGA.event({
    category: "User",
    action: "Created an Account",
});
ReactGA.exception({
    description: "An error ocurred",
    fatal: true,
});

function App() {
    const location = useLocation();
    const a = location.pathname;
    useEffect(() => {
        ReactGA.initialize({ trackingId: process.env.REACT_APP_GOOGLE_ID });
        ReactGA.pageview(location.pathname + location.search);
        // ReactGA.pageview(window.location.pathname + window.location.search);
    }, [location]);
    let dimos = useSelector((state) => state.dimo.dimos?.postRecommendationFeed);

    return (
        <>
            <div id="modal"></div>
            <div id="root"></div>
            <div className="w-full m-auto App ">
                {a === "/" && (
                    <>
                        <Header />
                        <HeaderMini />
                    </>
                )}

                {(a === "/tendencytest") | (a === "/") ? "" : <OHeader />}

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/Login" element={<Login />} />

                    <Route path="/art" element={<ArtWork />} />
                    <Route path="/art/*" element={<ArtWork />} />
                    <Route path="/createart" element={<ArtWorkCreate />} />
                    <Route path="/detailart/*" element={<ArtWorkInlineDetail />} />
                    <Route path="/dimo/qna/*" element={<Dimo {...dimos} />} />
                    <Route path="/dimo/info/*" element={<Dimo {...dimos} />} />

                    <Route path="/dimo/qnadetail/*" element={<DimoQNADetail />} />
                    <Route path="/dimo/infodetail/*" element={<DimoSharedDetail />} />
                    <Route path="/dimo/create/*" element={<DimoCreate />} />
                    <Route path="/dimo/create/edits/*" element={<DimoCreate />} />

                    <Route path="/myspace" element={<MyPage />} />
                    <Route path="/myspace/*" element={<MyPage />} />
                    <Route path="/myspace/myprofile/*" element={<MyPage />} />
                    <Route path="/myspace/mywork/*" element={<MyPage />} />
                    <Route path="/myspace/mypic/*" element={<MyPage />} />
                    <Route path="/myspace/share/*" element={<MyPage />} />
                    <Route path="/myspace/qna/*" element={<MyPage />} />

                    <Route path="/editmyspace" element={<EditMySpace />} />
                    <Route path="/editmyspace/*" element={<EditMySpace />} />

                    <Route path="/tendencytest" element={<TendencyTest />} />

                    <Route path="/Result/*" element={<Result />} />
                    <Route path="/myinterests" element={<MyInterests />} />
                    <Route path="/createprofile" element={<CreateProfile />} />
                    <Route path="/completeprofile" element={<CompleteProfile />} />
                    <Route path="/user/kakao/callback" element={<KakaoRedirectHandler />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
