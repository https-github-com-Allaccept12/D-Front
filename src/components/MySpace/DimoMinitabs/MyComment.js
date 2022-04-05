import React from "react";
import DimoComment from "./DimoCards/DimoComment";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3 w-full
`;

const MyComment = (props) => {
    const { data } = props;
    return (
        <>
            <Box>
                {data.map((value) => {
                    return (
                        <DimoComment data={value}/>
                        )
                    }
                )}
                
            </Box>
        </>
    );
};

export default MyComment;
