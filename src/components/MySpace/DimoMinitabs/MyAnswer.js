import React from "react";

import DimoQNAComment from "./DimoCards/DimoQNAComment";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3 w-full
`;

const MyAnswer = (props) => {
    return (
        <>
            <Box>
                <DimoQNAComment states="true" />
                <DimoQNAComment states="false" />
                <DimoQNAComment states="true" />
            </Box>
        </>
    );
};

export default MyAnswer;
