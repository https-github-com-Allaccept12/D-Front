import React from "react";

import { ArtWorkAllList, ArtWorkCategory, ArtWorkCreate, ArtWorkInlineDetail } from "../components/ArtWorks";
import { Title, Button } from "../elements"
import { Link, Route, Switch } from 'react-router-dom';





const ArtWork = (props) => {

  return (
    <>
    <div className="bg-dgray-200">
      {/* <ArtWorkCategory /> */}
    <Switch>
        <Route exact path="/art/list/:name" component={ArtWorkAllList} />
        <Route exact path="/art/createart" component={ArtWorkCreate} />
        <Route exact path="/art/detail" component={ArtWorkInlineDetail} />
        </Switch>
        </div>
    </>
  );
};

export default ArtWork;