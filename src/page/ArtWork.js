import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ArtWorkFilter, ArtWorkInlineDetail, ArtWorkList, ArtWorkWrite } from "../components/ArtWorks";
import { Title, Button, CategoryMini, Icon } from "../elements";
import { artworkPageLoad } from "../redux/modules/artWork";
import { Link, Route, Switch } from "react-router-dom";
import tw from "tailwind-styled-components";

const MobileBtn = tw.button`
bg-dpurple-200  rounded-full p-2 xl:hidden fixed bottom-10 right-5 text-white shadow-md
`;

const DesBtn = tw.button`
bg-dpurple-200  rounded-full p-2 invisible xl:visible md:fixed bottom-10 right-5 text-white shadow-md
opacity-60 hover:opacity-100
`;

const ArtWork = (props) => {
    const dispatch = useDispatch(artworkPageLoad);
    // useEffect(() => {
    dispatch(artworkPageLoad(dispatch));
    // }, [])

    return (
        <>
            <div className="bg-dgray-200">
                <div className="xl:grid xl:grid-cols-4 ">
                    {/* <div className="">
                        <ArtWorkCategory />
                    </div> */}
                    <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                        <div className=" flex flex-col h-[44rem]">
                            <div className="flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                <ArtWorkFilter />
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:col-start-2 xl:col-end-5 xl:row-start-1">
                        <div className="w-full h-[200rem]">
                            <ArtWorkList />
                            <CategoryMini />
                            <Link to="/createart">
                                <MobileBtn>
                                    <Icon name="Edit" />
                                </MobileBtn>
                            </Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    {/* <Route exact path="/art/list/:name" component={ArtWorkAllList} /> */}
                    <Route exact path="/art/detail" component={ArtWorkInlineDetail} />
                </Switch>
            </div>
        </>
    );
};

export default ArtWork;
