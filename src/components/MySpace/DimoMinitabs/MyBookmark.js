import React from "react";
import DimoCard from "./DimoCards/DimoCard";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3
`;

const MyBookmark = (props) => {
    return (
        <>
            <Box>
                <DimoCard />
                <DimoCard />
                <DimoCard />
            </Box>
        </>
    );
};

export default MyBookmark;
