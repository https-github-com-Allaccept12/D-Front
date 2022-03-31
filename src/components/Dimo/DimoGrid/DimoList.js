import React from "react";
import { useSelector } from "react-redux";
import { Button, SearchInput, Title } from "../../../elements";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";
import DimoInsideFilter from "./DimoInsideFilter";
import DimoPost from "./DimoPost";
const Grid = tw.div` 
flex flex-row flex-wrap items-center justify-center
xl:justify-start lg:gap-2 px-0 sm:px-0 lg:px-4 xl:px-8 2xl:px-10

`;

const Box = tw.div`
flex flex-col lg:gap-3 py-6 rounded-xl mt-2
`;

const InnerBox = tw.div`
bg-white flex flex-col gap-0 py-6 xl:px-2 rounded-xl w-full xl:max-w-[95%] 2xl:max-w-[90%]
`;

const Line = tw.hr`
w-[95%] border mx-auto border-gray-300 my-6
`;

const p = [
    { id: "11" },
    { id: "21" },
    { id: "31" },
    { id: "41" },
    { id: "51" },
    { id: "61" },
    { id: "71" },
    { id: "81" },
    { id: "91" },
    { id: "101" },
];

const DimoList = (props) => {
    const { list } = props;
    return (
        <>
            <Box>
                <InnerBox>
                    <DimoInsideFilter />
                    <Line />
                    <Grid>
                        {p.map((n) => {
                            return (
                                <>
                                    <DimoPost key={n.id.toString()} size="3" list={list} />
                                </>
                            );
                        })}
                    </Grid>
                </InnerBox>
            </Box>
        </>
    );
};

export default DimoList;
