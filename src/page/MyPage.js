import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../shared/cookie";
import { myPageLoad, historyLoad, careerFeed } from "../redux/modules/myPage";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Icon, Title } from "../elements";
import { MyPageCategory, MyProfile, MySpaceTab, TopOfProfile } from "../components/MySpace";
import { useToggle } from "../hooks";
import tw from "tailwind-styled-components";

const MobileBtn = tw.button`
bg-dpurple-200 rounded-md p-2 2xl:hidden fixed bottom-10 right-5 opacity-30 hover:opacity-100 text-white shadow-md
`;

const Grid = tw.div` 
fixed top-5 left-5 w-3/5 h-full rounded-xl
`;

const Box = tw.div`
flex flex-wrap gap-2 py-4 bg-white px-5 rounded-xl mt-1 shadow-md flex-row lg:flex-col z-30
`;

const TabBtn = tw.button`
flex flex-row py-2 px-2 font-min1 text-tiny hover:bg-dpurple-100 rounded-lg gap-x-2
`;

const MyPage = (props) => {

    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];
    const myPageId = a.split('/')[3];

    const [showCategory, setShowCategory] = useToggle();
    const dispatch = useDispatch();
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    // console.log('location:', location.state.owner_id);
    const owner_account_id = myPageId;
    console.log('accountId, ownerAccountId', account_id, owner_account_id);

    useEffect(() => {
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
        dispatch(historyLoad({ owner_account_id, dispatch }));
        dispatch(careerFeed({ owner_account_id, dispatch }));
    }, [account_id, owner_account_id, dispatch]);

    // let info = null
    // useEffect(() => {
    //   info = useSelector(state => state.myPage.myPage);
    // })

    const info = useSelector((state) => state.myPage.myPage);
    const exp = useSelector((state) => state.myPage.history);
    const feed = useSelector((state) => state.myPage.feed);

    return (
        <>
            <div className="grid-cols-5 2xl:grid">
                <div className="hidden w-40 h-full mt-4 xl:contents md:ml-28 ">
                    <MyPageCategory myPageId={myPageId} account_id={account_id}/>
                </div>
                {/* 내정보일땐 마이프로필 다른사람정보일땐 디폴리오 각 메뉴를 클릭하면 메뉴 */}
                <Suspense fallback={<h1>Loading..</h1>}>
                    <TopOfProfile info={info} exp={exp} feed={feed}/>
                </Suspense>
                
            </div>

            <MobileBtn onClick={setShowCategory}>
                {showCategory ? (
                    <>
                        <Icon name="Link" iconSize="32" />
                    </>
                ) : (
                    <>
                        <Icon name="Search" iconSize="32" />
                    </>
                )}
            </MobileBtn>

            {showCategory && (
                <>
                    <Grid>
                        <Box>
                            <Title size="5">프로필</Title>
                            <div className="flex flex-row mb-3">
                                <Link to="/myspace/myprofile">
                                    <TabBtn>내 프로필</TabBtn>
                                </Link>
                                <Link to="/editmyspace/z">
                                    <TabBtn>프로필 수정</TabBtn>
                                </Link>
                            </div>
                            <Title size="5">프로젝트</Title>

                            <div className="flex flex-row mb-3">
                                <Link to="/myspace/mywork">
                                    <TabBtn>내 프로젝트</TabBtn>
                                </Link>
                                <Link to="/myspace/mypic">
                                    <TabBtn>스크랩</TabBtn>
                                </Link>
                            </div>

                            <Title size="5">Dimo</Title>
                            <div className="flex flex-row mb-3">
                                <Link to="/myspace/share">
                                    <TabBtn>게시글 관리</TabBtn>
                                </Link>
                                <Link to="/myspace/qna">
                                    <TabBtn>QNA 관리</TabBtn>
                                </Link>
                            </div>
                        </Box>
                    </Grid>
                </>
            )}
        </>
    );
};

export default MyPage;
