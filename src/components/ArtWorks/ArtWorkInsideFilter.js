import React from "react";

import { useHistory } from "react-router-dom";
import { Icon, Text } from "../../elements";
import tw from "tailwind-styled-components";

const Grid = tw.div` 
flex flex-col md:flex-row justify-between md:px-4 xl:px-8
`;

const FilterBtn = tw.button`
 bg-white rounded-full max-w-[24.375rem] h-[3rem] px-7
 border-2 border-dgray-200 box-border flex flex-row justify-center items-center
`;

const InnerLine = tw.hr`
border h-6 mx-3
`;

const SInput = tw.input`
border-2 border-dgray-200 rounded-full max-w-[24.375rem] h-[3rem]
box-border px-12 relative w-full md:w-fit
`;

const TextCSS = tw.p`
flex flex-row justify-center items-center gap-1 font-min1 Text-tiny
text-dgray-300 hover:text-dgray-400
hover:border-dgray-400 active:text-dpurple-300
`;

const ColorSpan = tw.span`
hover:text-dgray-500 active:text-dpurple-300
`;

const ArtWorkInsideFilter = (props) => {
    let history = useHistory();
    return (
        <>
            <Grid>
                <FilterBtn>
                    <TextCSS>
                        <Icon name="HeartE" iconSize="14" />
                        <ColorSpan>인기순</ColorSpan>
                    </TextCSS>
                    <InnerLine />
                    <TextCSS>
                        <Icon name="Time" iconSize="14" />
                        <ColorSpan>최신순</ColorSpan>
                    </TextCSS>
                    <InnerLine />
                    <TextCSS>
                        <Icon name="User" iconSize="14" />
                        <ColorSpan>팔로우 디자이너</ColorSpan>
                    </TextCSS>
                </FilterBtn>
                <div className="relative">
                    <SInput placeholder="Search" type="text" />
                    <Icon name="Search" className="absolute inset-3 text-dgray-500" />
                </div>
            </Grid>
        </>
    );
};

export default ArtWorkInsideFilter;
