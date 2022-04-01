import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../shared/cookie";
import { myPageLoad, historyLoad } from "../redux/modules/myPage";
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
    const [showCategory, setShowCategory] = useToggle();
    const dispatch = useDispatch();
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const owner_account_id = account_id;
    // console.log(account_id, owner_account_id);

    useEffect(() => {
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
        dispatch(historyLoad({ owner_account_id, dispatch }))
    }, [account_id, owner_account_id, dispatch]);

    // let info = null
    // useEffect(() => {
    //   info = useSelector(state => state.myPage.myPage);
    // })

    const info = useSelector((state) => state.myPage.myPage);
    const exp = useSelector((state) => state.myPage.history);
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];

    return (
        <>
            <div className="grid-cols-5 2xl:grid">
                <div className="hidden w-40 h-full mt-4 xl:contents md:ml-28 ">
                    <MyPageCategory />
                </div>
                {/* 내정보일땐 마이프로필 다른사람정보일땐 디폴리오 각 메뉴를 클릭하면 메뉴 */}
                <Suspense fallback={<h1>Loading..</h1>}>
                    <TopOfProfile info={info} exp={exp}/>
                </Suspense>
                {/* <div className="col-start-2 col-end-6">
          <div className=" bg-blue-400 h-52 w-[80.625rem]">
            {" "}
            여기에 배경이미지
            <div className="items-center justify-items-center">
              <div className="flex justify-end">팔로잉 팔로워</div>

              <div className="flex flex-col items-center mt-20">
                <Profile size="1" />
                <div className="ml-2">
                  <div className="grid p-1 rounded-lg justify-items-center">
                    <h3 className="text-xl font-medium text-gray-800 font-minB">
                      펭귄 님
                    </h3>
                    <span className="text-sm text-gray-600 font-minB">
                      UX/UI Designer
                    </span>
                    <Button size="3">
                      <span className="text-xs font-min-2"> INTP </span>
                    </Button>

                    <div className="flex flex-row p-1 text-2xl">
                      <Icon name="Time" iconSize="32" />
                      <Icon name="Talk" iconSize="32" />
                      <Icon name="Link" iconSize="32" />
                      <Icon name="Edit" iconSize="32" />
                    </div>
                  </div>
                </div>
              </div>

              <MySpaceTab />
            </div>
          </div>
        </div> */}
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
