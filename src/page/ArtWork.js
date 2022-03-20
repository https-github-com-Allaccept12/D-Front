import React from "react";

import { AllList, Categorys, CreateArtWork } from "../components/ArtWork";
import { Title, Button } from "../elements"
import { Link, Route, Switch } from 'react-router-dom';
import { useTabs } from "../hooks";




const ArtWork = (props) => {

  return (
    <>
    <div className="bg-dgray-200">
      <Categorys />
    <Switch>
        <Route exact path="/art/list/:name" component={AllList} />
        <Route exact path="/art/createart" component={CreateArtWork} />
        {/* <Route exact path="/art/detail" component={InlineDetail} /> */}
        </Switch>
        </div>
    </>
  );
};

export default ArtWork;