import React from "react";

import {
    ArtWorkAllList,
    ArtWorkCategory,
    ArtWorkCreate,
    ArtWorkInlineDetail,
    ArtWorkWrite,
} from "../components/ArtWorks";
import { Title, Button } from "../elements";
import { Link, Route, Switch } from "react-router-dom";

const ArtWork = (props) => {
    return (
        <>
            <div className="bg-dgray-200">
                <div className="xl:grid xl:grid-cols-4 ">
                    {/* <div className="">
                        <ArtWorkCategory />
                    </div> */}
                    <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                        <div className=" flex flex-col h-[44rem]">
                            <div className="bg-gray-300 flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                여기에 카테고리
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:col-start-2 xl:col-end-5 xl:row-start-1">
                        <div className="bg-yellow-400 w-full h-[200rem]">
                            여기에 필터버튼 디자인
                            <div>버튼1</div> <div>버튼1</div> <div>버튼1</div>
                            <div>list</div>
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
