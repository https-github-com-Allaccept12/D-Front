import React from "react";

import { useHistory, Link } from "react-router-dom";
import { DimoList } from "../components";
import { AdjBar, DimoHeader } from "../NavComponents";

const DimoQNA = (props) => {
  let history = useHistory();

  return (
    <>

    <DimoHeader />
    <div className="fixed top-16 md:right-32">
          <AdjBar write="dimoqna" />
          </div> 
    <DimoList list="shared" />

    </>
  );
};

export default DimoQNA;