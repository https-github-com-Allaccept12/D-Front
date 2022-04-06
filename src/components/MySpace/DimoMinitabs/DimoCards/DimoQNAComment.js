import React from "react";
import { Subtitle, Text, Title } from "../../../../elements";

import { Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;
const Box = tw.div`
w-full
`;

const DimoQNAComment = (props) => {
    const { states, data } = props;
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[1];
    const { size } = props;

    return (
        <>
            <Box>
                {states == "true" ? <Text className="text-dpurple-300">채택된 댓글</Text> : ""}
                <Subtitle size="1">{data && data.content}</Subtitle>
                {/* <Text className="text-dgray-400">몇분 전</Text> */}
                <Title size="6" className="mt-10 cursor-pointer text-dgray-400">
                    {data && data.title}
                </Title>
            </Box>
            <InnerLine />
        </>
    );
};

DimoQNAComment.defaultProps = {
    size: "2",
};

export default DimoQNAComment;
