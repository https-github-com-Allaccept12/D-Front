import React from "react";
import { Button } from "../../elements";

import { useHistory, Link } from "react-router-dom";


const NotFound = (props) => {
  let history = useHistory();
  return (
<div className="grid w-full max-h-screen grid-cols-7 grid-rows-4 bg-yellow-400">
  <div className="col-start-4 row-start-2">타입</div>
<div className="col-start-4 row-start-3">
  <div>타입 a!</div>
</div>
<button className="col-start-5"><Link to="/myinterests">다음으로 넘어가기</Link></button>
<div>

</div>
</div>
  );
};

export default NotFound;