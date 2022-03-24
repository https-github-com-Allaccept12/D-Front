import React from "react";

import { ArtWorkAllList, ArtWorkCategory, ArtWorkCreate, ArtWorkInlineDetail, ArtWorkWrite } from "../components/ArtWorks";
import { Title, Button } from "../elements"
import { Link, Route, Switch } from 'react-router-dom';





const ArtWork = (props) => {

  return (
    <>
    <div className="bg-dgray-200">

    <div className='grid grid-cols-4'>
        <div className='md:ml-28 mt-4 w-40 h-[112.5rem] '>
        
        <ArtWorkCategory />

        </div>
     
    <div className="col-start-2 col-end-5 row-start-1">
        <ArtWorkAllList  />
        </div>
        </div>
    <Switch>
        <Route exact path="/art/list/:name" component={ArtWorkAllList} />
       
        <Route exact path="/art/detail" component={ArtWorkInlineDetail} />
        </Switch>
        </div>
    </>
  );
};

export default ArtWork;