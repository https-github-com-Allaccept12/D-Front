import React from "react";
import DimoCard from "./DimoCards/DimoCard";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3
`;

const MyBookmark = (props) => {
    const { data } = props;
    return (
        <>
            <Box>
                {data.map((value) => {
                    return (
                        <DimoCard data={value} isMine={false}/>
                        )
                    }
                )}
                {/* <DimoCard />
                <DimoCard />
                <DimoCard /> */}
            </Box>
        </>
    );
};

export default MyBookmark;
