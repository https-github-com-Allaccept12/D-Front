import React from "react";

import { Title, Text, Icon } from "../../elements";
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle } from "../../hooks";

const Grid = tw.div` 
fixed top-4 left-16 w-3/4 h-full rounded-xl
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
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                전체보기
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                UI/UX
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                그래픽디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                브랜딩/편집디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                제품/패키지 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                타이포그래피
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                영상/모션그래픽
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                공예
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                패션
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                게임/캐릭터 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                건축/인테리어/환경 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                기타
                            </TabBtn>
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
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                전체보기
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                UI/UX
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                그래픽디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                브랜딩/편집디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                제품/패키지 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                타이포그래피
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                영상/모션그래픽
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                공예
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                패션
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                게임/캐릭터 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                건축/인테리어/환경 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                기타
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
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                전체보기
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                UI/UX
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                그래픽디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                브랜딩/편집디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                제품/패키지 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                타이포그래피
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                영상/모션그래픽
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                공예
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                패션
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                게임/캐릭터 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                건축/인테리어/환경 디자인
                            </TabBtn>
                            <TabBtn>
                                <Icon name="StarE" iconSize="20" />
                                기타
                            </TabBtn>
                        </Box>
                    </Grid>
                )}
            </>
        );
};

export default CategoryMini;
