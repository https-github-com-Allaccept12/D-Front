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
                    <div className="">
                        <ArtWorkCategory />
                    </div>

                    <div className="w-full xl:col-start-2 xl:col-end-5 xl:row-start-1">
                        <div className="bg-yellow-400 w-full h-full">
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
