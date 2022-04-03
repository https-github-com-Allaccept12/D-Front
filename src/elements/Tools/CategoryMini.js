import React from "react";

import { Title, Text, Icon } from "../../elements";
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle } from "../../hooks";
import { useDispatch } from "react-redux";
import { categoryArtwork, artworkPageLoad } from "../../redux/modules/artWork";
const Grid = tw.div` 
fixed top-4 left-16 w-3/4 h-full rounded-xl xl:hidden
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
                            <TabBtn>🌈 전체보기</TabBtn>
                            <TabBtn>📱 UI/UX</TabBtn>
                            <TabBtn>🎨 그래픽디자인</TabBtn>
                            <TabBtn>📠 브랜딩/편집디자인</TabBtn>
                            <TabBtn>🎁 제품/패키지 디자인</TabBtn>
                            <TabBtn>📝 타이포그래피</TabBtn>
                            <TabBtn>🎬 영상/모션그래픽</TabBtn>
                            <TabBtn>🧶 공예</TabBtn>
                            <TabBtn>👗 패션</TabBtn>
                            <TabBtn>🎮 게임/캐릭터 디자인</TabBtn>
                            <TabBtn>🏠 건축/인테리어/환경 디자인</TabBtn>
                        </Box>
                    </Grid>
                )}
            </>
        );
    if (list === "shared")
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
                            <TabBtn>🌈 전체보기</TabBtn>
                            <TabBtn>📱 UI/UX</TabBtn>
                            <TabBtn>🎨 그래픽디자인</TabBtn>
                            <TabBtn>📠 브랜딩/편집디자인</TabBtn>
                            <TabBtn>🎁 제품/패키지 디자인</TabBtn>
                            <TabBtn>📝 타이포그래피</TabBtn>
                            <TabBtn>🎬 영상/모션그래픽</TabBtn>
                            <TabBtn>🧶 공예</TabBtn>
                            <TabBtn>👗 패션</TabBtn>
                            <TabBtn>🎮 게임/캐릭터 디자인</TabBtn>
                            <TabBtn>🏠 건축/인테리어/환경 디자인</TabBtn>
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
                                🎁 제품/패키지 디자인
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
