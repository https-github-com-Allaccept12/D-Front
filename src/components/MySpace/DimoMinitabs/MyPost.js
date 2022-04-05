import React from "react";

import DimoCard from "./DimoCards/DimoCard";
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3
`;

const MyPost = (props) => {
    const { data, profile } = props;
    const history = useHistory();
    return (
        <>
            <Box>
                {data && data.map((value) => {
                    return (
                        <DimoCard data={value} profile={profile} isMine={true}/>
                    )
                })}
                
                {/* <DimoCard />
                <DimoCard /> */}
            </Box>
        </>
    );
};

export default MyPost;
