import React from "react";

import { Title, Text, Icon } from "../../../elements";
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Grid = tw.div` 
flex flex-col justify-center items-center w-full h-full rounded-xl
`;

const Box = tw.div`
flex flex-col gap-6 bg-white py-6 px-7 rounded-xl mt-3
`;

const DimoFilter = (props) => {
    let history = useHistory();
    return (
        <>
            <Grid>
                <Box>
                    <Title size="5" className="-mb-2">
                        카테고리
                    </Title>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        전체보기
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        UI/UX
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        그래픽디자인
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        브랜딩/편집디자인
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        제품/패키지 디자인
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        타이포그래피
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        영상/모션그래픽
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        공예
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        패션
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        게임/캐릭터 디자인
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        건축/인테리어/환경 디자인
                    </Text>
                    <Text size="1" className="flex flex-row gap-3">
                        <Icon name="StarE" iconSize="20" />
                        기타
                    </Text>
                </Box>
            </Grid>
        </>
    );
};

export default DimoFilter;
