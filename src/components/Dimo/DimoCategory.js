import React from "react";
import { Button, Title, Text } from "../../elements";

import { Link, Route, Switch, useLocation } from 'react-router-dom';


import { DimoSlider } from "../../components"


const DimoCategory = (props) => {
  const {list} = props
  if(list === "qna") return (
    <> 
    <div className="fixed right-10 top-32">

          </div>

          <div className="ml-16">
        <DimoSlider />
      </div>

    </>
  );

  if(list === "shared") return (
    <> 
      <div className="fixed right-10 top-32">
      <div className="flex flex-row p-4 gap-3">
     <Link to="/dimo/create/shared"><Button size="3">글쓰기</Button></Link>
    <Link to="/dimo/shareddetail"><Button size="3">인라인</Button></Link>
          </div>
          </div>

          <div className="ml-16">
        <DimoSlider />
      </div>

    </>
  );
  else {
    return null
  }
};

export default DimoCategory;
