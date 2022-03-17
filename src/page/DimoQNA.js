import React from "react";
import { Button } from "../elements";

import { useHistory, Link } from "react-router-dom";
import { PostList , AdjBar, DimoHeader, DimoList } from "../components";


const Dimo = (props) => {
  let history = useHistory();

  return (
    <>

    <DimoHeader />
    <div className="fixed top-16 md:right-24">
          <AdjBar write="dimoqna" />
          </div> 
    <DimoList />

    </>
  );
};

export default Dimo;