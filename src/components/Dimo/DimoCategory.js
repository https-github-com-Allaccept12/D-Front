import React from "react";

import { useHistory, Link,  useLocation } from "react-router-dom";
import DimoList from "./DimoList";
import { AdjBar, DimoHeader } from "../../NavComponents";

const DimoQNA = (props) => {
  let history = useHistory();
  const location = useLocation();
  const a = location.pathname
  if(a === "/dimoqna") return (
    <>
<div className="bg-dgray-200">

    <div className="fixed top-16 md:right-32">
          <AdjBar write="dimoqna" />
          </div> 
    <DimoList list="shared" />
    </div>
    </>
  );
  if(a === "/dimoshared") return (
    <>

    <div className="fixed top-16 md:right-32">
          <AdjBar write="dimoshared" />
          </div> 
    <DimoList list="shared" />

    </>
  );
};

export default DimoQNA;