import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Header, OHeader, NotFound, HeaderMini } from "./NavComponents";
import { TendencyTest, MyInterests, Result, CreateProfile } from "./components";
import { Main, ArtWork, Dimo, Login, LogOut, EditMySpace, MyPage } from "./page";
import { CompleteProfile } from "./components";
import { DimoQNADetail, DimoSharedDetail, DimoCreate } from "./components/Dimo";
import { ArtWorkWrite, ArtWorkCreate, ArtWorkInlineDetail } from "./components/ArtWorks";
import { useSelector } from "react-redux";
import KakaoRedirectHandler from "./shared/KakaoRedirectHandler";

function App() {
    const location = useLocation();
    const a = location.pathname;
    let dimos = useSelector((state) => state.dimo.dimos?.postRecommendationFeed);

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
        </>
    );
}

export default App;
