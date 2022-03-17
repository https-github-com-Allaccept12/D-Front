import React from "react";
import { Button } from "../elements";

import { useHistory, Link } from "react-router-dom";
import { DimoList } from "../components";
import { AdjBar, DimoHeader } from "../NavComponents";


const DimoShared = (props) => {
  let history = useHistory();

  return (
    <>
    <DimoHeader />
    <div className="fixed top-16 md:right-32">
          <AdjBar write="dimoshared" />
          </div> 
    <DimoList list="shared" />

    </>
  );
};

export default DimoShared;