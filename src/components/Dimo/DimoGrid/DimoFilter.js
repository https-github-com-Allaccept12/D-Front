import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title, Text, Icon } from "../../../elements";
import { useNavigate, useLocation } from "react-router-dom";
import { categoryDimo } from "../../../redux/modules/dimo";
import tw from "tailwind-styled-components";

const Grid = tw.div` 
flex flex-col justify-center items-center w-full h-full rounded-xl
`;

const Box = tw.div`
flex flex-col gap-2 py-4 bg-white px-5 rounded-xl mt-1
`;

const TabBtn = tw.button`
flex flex-row py-2 px-2 font-min1 text-tiny hover:bg-dpurple-100 rounded-lg gap-x-2
`;

const DimoFilter = (props) => {
    const { list } = props;
    // console.log(list);
    const navigate = useNavigate();
    const location = useLocation();
    // let category = location.state.category;

    const dispatch = useDispatch();

    // console.log(b);
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const visitor_account_id = account_id;
    const ClickCategory = (e) => {
        console.log(e.target.value);
        const bigCate = location.pathname.split("/")[2];
        const category = e.target.value;
        // const board = list.toUpperCase();
        const board = bigCate.toUpperCase();
        navigate(`/dimo/${bigCate}/${category}`, {
            state: {
                category: category,
            },
        });
        dispatch(categoryDimo({ category, dispatch, board, visitor_account_id }));
    };

    // const goToINFO = () => {
    //     navigate(
    //         `/dimo/info`,
    //         {
    //             state: {
    //                 board: "INFO",
    //                 category: "uiux",
    //             },
    //         },
    //         { replace: true },
    //     );
    // };

    if (list === "qna")
        return (
            <>
                <Grid>
                    <Box>
                        <Title size="5" className="ml-1">
                            카테고리
                        </Title>
                        {/* <TabBtn value="all" onClick={ClickCategory}>
                            🌈 전체보기
                        </TabBtn> */}
                        <TabBtn value="uiux" onClick={ClickCategory}>
                            📱 UI/UX
                        </TabBtn>
                        <TabBtn value="graphic" onClick={ClickCategory}>
                            🎨 그래픽디자인
                        </TabBtn>
                        <TabBtn value="edit" onClick={ClickCategory}>
                            📠 브랜딩/편집디자인
                        </TabBtn>
                        <TabBtn value="package" onClick={ClickCategory}>
                            🎁 패키지 디자인
                        </TabBtn>
                        <TabBtn value="product" onClick={ClickCategory}>
                            🏷️ 제품 디자인
                        </TabBtn>

                        <TabBtn value="typo" onClick={ClickCategory}>
                            📝 타이포그래피
                        </TabBtn>
                        <TabBtn value="video" onClick={ClickCategory}>
                            🎬 영상/모션그래픽
                        </TabBtn>
                        <TabBtn value="craft" onClick={ClickCategory}>
                            🧶 공예
                        </TabBtn>
                        <TabBtn value="fashion" onClick={ClickCategory}>
                            👗 패션
                        </TabBtn>
                        <TabBtn value="game" onClick={ClickCategory}>
                            🎮 게임/캐릭터 디자인
                        </TabBtn>
                        <TabBtn value="eco" onClick={ClickCategory}>
                            🏠 건축/인테리어/환경 디자인
                        </TabBtn>
                    </Box>
                </Grid>
            </>
        );
    if (list === "info")
        return (
            <>
                <Grid>
                    <Box>
                        <Title size="5" className="ml-1">
                            카테고리
                        </Title>
                        {/* <TabBtn value="all" onClick={ClickCategory}>
                            🌈 전체보기
                        </TabBtn> */}
                        <TabBtn value="uiux" onClick={ClickCategory}>
                            📱 UI/UX
                        </TabBtn>
                        <TabBtn value="graphic" onClick={ClickCategory}>
                            🎨 그래픽디자인
                        </TabBtn>
                        <TabBtn value="edit" onClick={ClickCategory}>
                            📠 브랜딩/편집디자인
                        </TabBtn>
                        <TabBtn value="package" onClick={ClickCategory}>
                            🎁 패키지 디자인
                        </TabBtn>
                        <TabBtn value="package" onClick={ClickCategory}>
                            🏷️ 제품 디자인
                        </TabBtn>
                        <TabBtn value="typo" onClick={ClickCategory}>
                            📝 타이포그래피
                        </TabBtn>
                        <TabBtn value="video" onClick={ClickCategory}>
                            🎬 영상/모션그래픽
                        </TabBtn>
                        <TabBtn value="craft" onClick={ClickCategory}>
                            🧶 공예
                        </TabBtn>
                        <TabBtn value="fashion" onClick={ClickCategory}>
                            👗 패션
                        </TabBtn>
                        <TabBtn value="game" onClick={ClickCategory}>
                            🎮 게임/캐릭터 디자인
                        </TabBtn>
                        <TabBtn value="eco" onClick={ClickCategory}>
                            🏠 건축/인테리어/환경 디자인
                        </TabBtn>
                    </Box>
                </Grid>
            </>
        );
};

export default DimoFilter;
