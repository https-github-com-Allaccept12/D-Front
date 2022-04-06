import React from "react";

import { Title, Text, Icon } from "../../elements";
import { useHistory, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle } from "../../hooks";
import { useDispatch } from "react-redux";
import { categoryArtwork, artworkPageLoad } from "../../redux/modules/artWork";
import { categoryDimo } from "../../redux/modules/dimo";
const Grid = tw.div` 
fixed top-4 left-16 w-2/4 rounded-xl xl:hidden
`;

const Box = tw.div`
flex flex-wrap gap-2 py-4 bg-white px-5 rounded-xl mt-1 shadow-md
`;

const TabBtn = tw.button`
flex flex-row py-2 px-2 font-min1 text-tiny hover:bg-dpurple-100 rounded-lg gap-x-2
`;

const MiniBtn = tw.button`
xl:hidden bg-dpurple-200 rounded-md fixed top-5 left-5 p-2 shadow-md text-white
`;

// 미니카테고리(토글형) qna/정보공유 그리고 else면 artwork
const CategoryMini = (props) => {
    const { list } = props;
    const [showCategory, setShowCategory] = useToggle();
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];

    let dispatch = useDispatch();
    const ClickCategory = (e) => {
        console.log(e.target.value);
        const category = e.target.value;
        if (category === "all") {
            dispatch(artworkPageLoad(dispatch));
        } else {
            dispatch(categoryArtwork({ category, dispatch }));
        }
    };

    const ClickCategoryDimo = (e) => {
        console.log(e.target.value);
        const category = e.target.value;
        const board = b.toUpperCase();

        if (b === "qna") {
            console.log(category, board);
            dispatch(categoryDimo({ category, dispatch, board }));
        } else if (b === "info") {
            dispatch(categoryDimo({ category, dispatch, board }));
        } else return null;
    };

    if (list === "qna")
        return (
            <>
                <MiniBtn onClick={setShowCategory}>
                    {showCategory ? (
                        <>
                            <Icon name="Cancel" iconSize="24" />
                        </>
                    ) : (
                        <>
                            <Icon name="Inarray" />
                        </>
                    )}
                </MiniBtn>
                {showCategory && (
                    <Grid>
                        <Box>
                            <TabBtn value="uiux" onClick={ClickCategoryDimo}>
                                📱 UI/UX
                            </TabBtn>
                            <TabBtn value="graphic" onClick={ClickCategoryDimo}>
                                🎨 그래픽디자인
                            </TabBtn>
                            <TabBtn value="edit" onClick={ClickCategoryDimo}>
                                📠 브랜딩/편집디자인
                            </TabBtn>
                            <TabBtn value="package" onClick={ClickCategoryDimo}>
                                🎁 패키지 디자인
                            </TabBtn>
                            <TabBtn value="package" onClick={ClickCategoryDimo}>
                            🏷️ 제품 디자인
                            </TabBtn>
                            <TabBtn value="typo" onClick={ClickCategoryDimo}>
                                📝 타이포그래피
                            </TabBtn>
                            <TabBtn value="video" onClick={ClickCategoryDimo}>
                                🎬 영상/모션그래픽
                            </TabBtn>
                            <TabBtn value="craft" onClick={ClickCategoryDimo}>
                                🧶 공예
                            </TabBtn>
                            <TabBtn value="fashion" onClick={ClickCategoryDimo}>
                                👗 패션
                            </TabBtn>
                            <TabBtn value="game" onClick={ClickCategoryDimo}>
                                🎮 게임/캐릭터 디자인
                            </TabBtn>
                            <TabBtn value="eco" onClick={ClickCategoryDimo}>
                                🏠 건축/인테리어/환경 디자인
                            </TabBtn>
                        </Box>
                    </Grid>
                )}
            </>
        );
    if (list === "info")
        return (
            <>
                <MiniBtn onClick={setShowCategory}>
                    {showCategory ? (
                        <>
                            <Icon name="Cancel" iconSize="24" />
                        </>
                    ) : (
                        <>
                            <Icon name="Inarray" />
                        </>
                    )}
                </MiniBtn>
                {showCategory && (
                    <Grid>
                        <Box>
                            <TabBtn value="uiux" onClick={ClickCategoryDimo}>
                                📱 UI/UX
                            </TabBtn>
                            <TabBtn value="graphic" onClick={ClickCategoryDimo}>
                                🎨 그래픽디자인
                            </TabBtn>
                            <TabBtn value="edit" onClick={ClickCategoryDimo}>
                                📠 브랜딩/편집디자인
                            </TabBtn>
                            <TabBtn value="package" onClick={ClickCategoryDimo}>
                                🎁 패키지 디자인
                            </TabBtn>
                            <TabBtn value="package" onClick={ClickCategoryDimo}>
                                🏷️ 제품 디자인
                            </TabBtn>
                            <TabBtn value="typo" onClick={ClickCategoryDimo}>
                                📝 타이포그래피
                            </TabBtn>
                            <TabBtn value="video" onClick={ClickCategoryDimo}>
                                🎬 영상/모션그래픽
                            </TabBtn>
                            <TabBtn value="craft" onClick={ClickCategoryDimo}>
                                🧶 공예
                            </TabBtn>
                            <TabBtn value="fashion" onClick={ClickCategoryDimo}>
                                👗 패션
                            </TabBtn>
                            <TabBtn value="game" onClick={ClickCategoryDimo}>
                                🎮 게임/캐릭터 디자인
                            </TabBtn>
                            <TabBtn value="eco" onClick={ClickCategoryDimo}>
                                🏠 건축/인테리어/환경 디자인
                            </TabBtn>
                        </Box>
                    </Grid>
                )}
            </>
        );
    else
        return (
            <>
                <MiniBtn onClick={setShowCategory}>
                    {showCategory ? (
                        <>
                            <Icon name="Cancel" iconSize="24" />
                        </>
                    ) : (
                        <>
                            <Icon name="Inarray" />
                        </>
                    )}
                </MiniBtn>
                {showCategory && (
                    <Grid>
                        <Box>
                            <TabBtn value="all" onClick={ClickCategory}>
                                🌈 전체보기
                            </TabBtn>
                            <TabBtn value="ui" onClick={ClickCategory}>
                                📱 UI/UX
                            </TabBtn>
                            <TabBtn value="graphic" onClick={ClickCategory}>
                                🎨 그래픽디자인
                            </TabBtn>
                            <TabBtn value="branding" onClick={ClickCategory}>
                                📠 브랜딩/편집디자인
                            </TabBtn>
                            <TabBtn value="pakage" onClick={ClickCategory}>
                                🎁 패키지 디자인
                            </TabBtn>
                            <TabBtn value="pakage" onClick={ClickCategory}>
                                🏷️ 제품 디자인
                            </TabBtn>
                            <TabBtn value="typo" onClick={ClickCategory}>
                                📝 타이포그래피
                            </TabBtn>
                            <TabBtn value="video" onClick={ClickCategory}>
                                🎬 영상/모션그래픽
                            </TabBtn>
                            <TabBtn value="crafts" onClick={ClickCategory}>
                                🧶 공예
                            </TabBtn>
                            <TabBtn value="fashion" onClick={ClickCategory}>
                                👗 패션
                            </TabBtn>
                            <TabBtn value="game" onClick={ClickCategory}>
                                🎮 게임/캐릭터 디자인
                            </TabBtn>
                            <TabBtn value="interior" onClick={ClickCategory}>
                                🏠 건축/인테리어/환경 디자인
                            </TabBtn>
                        </Box>
                    </Grid>
                )}
            </>
        );
};

export default CategoryMini;
