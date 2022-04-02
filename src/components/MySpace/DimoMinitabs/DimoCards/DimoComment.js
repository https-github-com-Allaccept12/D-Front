import React from "react";
import { Subtitle, Text, Title } from "../../../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;
const Box = tw.div`
w-full cursor-pointer hover:bg-dgray-200
`;

// 클릭하면 상세페이지로 이동!
const DimoCard = (props) => {
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[1];
    let history = useHistory();
    return (
        <>
            <Box>
                <Subtitle size="1" className="truncate w-3/4">
                    댓글 내용 댓글 내용댓글 꿀팁이에요 어쩌구 내용댓글 내용댓글 내용댓글 내용댓글 내용 댓글 내용댓글
                    내용 댓글 내용댓글 내용 댓글 내용댓글 내용
                </Subtitle>
                <Text className="text-dgray-400">몇분 전</Text>
                <Title size="6" className="text-dgray-400 mt-10  truncate">
                    포스트제목 피그마 장단점 설명해드립니다
                </Title>
            </Box>
            <InnerLine />
        </>
    );
};

export default DimoCard;
