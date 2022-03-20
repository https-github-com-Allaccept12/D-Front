import React from "react";

import { AllList, InlineDetail, Categorys } from "../components";
import { Title, Button } from "../elements"
import { Link, Route, Switch } from 'react-router-dom';
import { useTabs } from "../hooks";
import { CreateArtWork } from "../creates";



const ArtWork = (props) => {

  return (
    <>

    <Switch>
        <Route exact path="/artwork" component={Categorys} />
        <Route exact path="/createart" component={CreateArtWork} />
        <Route exact path="/detail" component={InlineDetail} />
        </Switch>
    </>
  );
};

export default ArtWork;