import React from "react";
import { Button, Label, Profile, Title, Text, HeartButton } from "../../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5

`;

const Card = tw.div`
w-full mt-10 rounded-lg border border-dgray-200 bg-white sm:px-28 p-3
`;

const Header = tw.div`

`;

const Body = tw.div`

`;

const Btns = tw.div``;

const Footer = tw.div``;

const DimoQNAQuestion = (props) => {
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[1];
    const { size } = props;
    let history = useHistory();
    return (
        <>
            <Card>
                <Header>
                    <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                    <div className="flex flex-row gap-1">
                        <Label size="1" color="4">
                            UI/UX
                        </Label>
                        <Label size="1" color="5">
                            진로고민
                        </Label>
                    </div>
                    <Title size="6">UI/UX 취업 관련 질문입니다</Title>
                    <div className="flex flex-row">
                        <Text>2022.07.17</Text>
                        <Text>조회수 2천</Text>
                        <Text>채택완료</Text>
                    </div>
                </Header>
                <Body>
                    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                        안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며
                        제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제
                        전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다.
                    </Text>
                </Body>
                <Btns>
                    <div className="flex flex-row justify-between">
                        <HeartButton like_cnt="1" is_like />
                        <div className="flex flex-row space-x-4">
                            <HeartButton like_cnt="0" is_like />
                            <HeartButton like_cnt="1" is_like />
                        </div>
                    </div>
                </Btns>

                <InnerLine />
                <Footer>
                    <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                </Footer>
            </Card>
        </>
    );
};

export default DimoQNAQuestion;
