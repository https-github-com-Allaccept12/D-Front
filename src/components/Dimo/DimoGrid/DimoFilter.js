import React from "react";

import { Title, Text, Icon } from "../../../elements";
import { useHistory } from "react-router-dom";
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

    let history = useHistory();
    if (list === "qna")
        return (
            <>
                <Grid>
                    <Box>
                        <Title size="5" className="ml-1">
                            카테고리
                        </Title>
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
                        <TabBtn>🗃️ 기타</TabBtn>
                    </Box>
                </Grid>
            </>
        );
    if (list === "shared")
        return (
            <>
                <Grid>
                    <Box>
                        <Title size="5" className="ml-1">
                            카테고리
                        </Title>
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
                        <TabBtn>🗃️ 기타</TabBtn>
                    </Box>
                </Grid>
            </>
        );
};

export default DimoFilter;
