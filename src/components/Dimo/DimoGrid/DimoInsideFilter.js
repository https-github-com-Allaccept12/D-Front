import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Icon, Text } from "../../../elements";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { searchDimo, orderByLikeDimo, orderByNewDimo } from "../../../redux/modules/dimo";

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
px-12 relative w-full md:w-fit 
`;

const TextCSS = tw.p`
flex flex-row justify-center items-center gap-1 font-min1 Text-tiny
text-dgray-300 hover:text-dgray-400
hover:border-dgray-400 active:text-dpurple-300
`;

const ColorSpan = tw.span`
hover:text-dgray-500 active:text-dpurple-300
`;

const DimoInsideFilter = (props) => {
    const visitor_account_id = sessionStorage.getItem("account_id");
    const dispatch = useDispatch();
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];
    const board = b.toUpperCase();
    // let category = "";
    const [category, setCategory] = useState("");
    useEffect(() => {
        setCategory(location.pathname.split("/")[3]);
    }, [location]);
    console.log(location);
    console.log(category);

    const JobOptions = [
        { value: "uiux", label: "UI & UX" },
        { value: "fashion", label: "패션" },
        { value: "typo", label: "타이포그래피" },
        { value: "craft", label: "공예" },
        { value: "package", label: "패키지" },
        { value: "graphic", label: "그래픽" },
        { value: "video", label: "영상/모션" },
        { value: "product", label: "제품" },
        { value: "game", label: "게임/캐릭터" },
        { value: "edit", label: "브랜딩/편집" },
        { value: "eco", label: "건축/인테리어/환경" },
    ];

    const ByLike = () => {
        dispatch(orderByLikeDimo({ category, board, dispatch }));
    };

    const orderByNew = () => {
        dispatch(orderByNewDimo({ category, board, dispatch }));
    };

    const keyPress = (e) => {
        if (e.key == "Enter") {
            const keyword = e.target.value;
            dispatch(searchDimo({ keyword, visitor_account_id, board, dispatch }));
            // console.log('enter', e.target.value);
        }
    };
    return (
        <>
            <Grid>
                <FilterBtn>
                    <TextCSS onClick={ByLike}>
                        <Icon name="HeartE" iconSize="14" />
                        <ColorSpan>인기순</ColorSpan>
                    </TextCSS>
                    <InnerLine />
                    <TextCSS onClick={orderByNew}>
                        <Icon name="Time" iconSize="14" />
                        <ColorSpan>최신순</ColorSpan>
                    </TextCSS>
                </FilterBtn>
                <div className="relative">
                    <SInput placeholder="Search" type="text" onKeyPress={keyPress} />
                    <Icon name="Search" className="absolute inset-3 Text-dgray-500 w-10" />
                </div>
            </Grid>
        </>
    );
};

export default DimoInsideFilter;
