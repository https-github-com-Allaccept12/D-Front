import React from "react";

import {
    ArtWorkAllList,
    ArtWorkCategory,
    ArtWorkCreate,
    ArtWorkFilter,
    ArtWorkInlineDetail,
    ArtWorkList,
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
                            <div className="flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                <ArtWorkFilter />
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:col-start-2 xl:col-end-5 xl:row-start-1">
                        <div className="w-full h-[200rem]">
                            <ArtWorkList />
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
