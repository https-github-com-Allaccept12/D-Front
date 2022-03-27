import React from "react";

import { useHistory } from "react-router-dom";
import { Icon, Text } from "../../../elements";
import tw from "tailwind-styled-components";

const Grid = tw.div` 
flex flex-col md:flex-row justify-between md:px-4 xl:px-8
`;

const FilterBtn = tw.button`
 bg-white rounded-full max-w-[24.375rem] h-[3rem] px-7
 border-2 border-dgray-200 box-border flex flex-row justify-center items-center
`;

const InnerLine = tw.hr`
border h-6 mx-4
`;

const SInput = tw.input`
border-2 border-dgray-200 rounded-full max-w-[24.375rem] h-[3rem]
box-border px-12 relative w-full md:w-fit
`;

const DimoInsideFilter = (props) => {
    let history = useHistory();
    return (
        <>
            <Grid>
                <FilterBtn>
                    <Text size="1" className="flex flex-row justify-center items-center gap-1">
                        <Icon name="StarE" iconSize="14" />
                        인기순
                    </Text>
                    <InnerLine />
                    <Text size="1" className="flex flex-row justify-center items-center gap-1">
                        <Icon name="StarE" iconSize="14" />
                        최신순
                    </Text>
                </FilterBtn>
                <div className="relative">
                    <SInput placeholder="Search" />
                    <Icon name="Search" className="absolute inset-3 text-dgray-500" />
                </div>
            </Grid>
        </>
    );
};

export default DimoInsideFilter;
