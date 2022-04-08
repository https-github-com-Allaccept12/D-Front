import React from "react";
import { Subtitle, Text, Title } from "../../../../elements";

import { Link, useLocation, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const a = location.pathname;
    const b = a.split("/")[1];

    const goToDetail = () => {
        navigate(`/dimo/qnadetail/${data.post_id}`, {
            state: {
                post_id: data.post_id,
            }
        });
    };


    return (
        <>
            <Box onClick={goToDetail}>
                {states == "true" ? <Text className="text-dpurple-300">채택된 댓글</Text> : ""}
                <Subtitle size="1">{data && data.content}</Subtitle>
                {/* <Text className="text-dgray-400">몇분 전</Text> */}
                <Title size="6" className="mt-10 cursor-pointer text-dgray-400">
                    {data && data.post_title}
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
