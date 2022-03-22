import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import {Title} from "../elements"
import { useToggle } from "../hooks";
import { MyPage, Dpolio, MyArtWork, MyCommunity } from "../components/MySpace"
import { Tabs, MiniTabs } from "../NavComponents";

import EditMySpace from "./EditMySpace";



const MySpace = (props) => {


  return (
<>
<div className='flex flex-row'> 

     </div>

  <Switch>
        <Route exact path={["/myspace","/myspace/:name"]} component={MyPage} />
        
       
        </Switch>
      </>



  );
};

export default MySpace;