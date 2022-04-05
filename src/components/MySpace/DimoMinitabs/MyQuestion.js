import React from "react";

import DimoQNACard from "./DimoCards/DimoQNACard";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3 w-full
`;

const MyQuestion = (props) => {
    const { data, profile } = props;
    return (
        <>
            <Box>
                {data && data.map((value) => {
                    return (
                        <DimoQNACard data={value} profile={profile}/>
                        )
                    }
                )}
            </Box>
        </>
    );
};

export default MyQuestion;
