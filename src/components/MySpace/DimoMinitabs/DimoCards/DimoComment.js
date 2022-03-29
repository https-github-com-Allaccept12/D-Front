import React from "react";
import { Subtitle, Text, Title } from "../../../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;
const Box = tw.div`
w-full
`;

const DimoCard = (props) => {
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[1];
    const { size } = props;
    let history = useHistory();
    return (
        <>
            <Box>
                <Subtitle size="1">댓글 댓글댓글</Subtitle>
                <Text className="text-dgray-400">몇분 전</Text>
                <Title size="6" className="text-dgray-400 mt-10 cursor-pointer">
                    피그마 장단점 설명해드립니다
                </Title>
            </Box>
            <InnerLine />
        </>
    );
};

DimoCard.defaultProps = {
    size: "2",
};

export default DimoCard;
