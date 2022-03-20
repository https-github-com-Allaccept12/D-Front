import React from "react";
import { Button } from "../../elements";

import { useHistory } from "react-router-dom";


const NotFound = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="flex ml-3">
  <div className="mr-3">
    <img src="http://picsum.photos/50" alt="" className="rounded-full" />
  </div>
  <div>
    <h1 className="font-semibold">Itay Buyoy</h1>
    <p className="text-xs text-gray-500">2 seconds ago</p>
  </div>

</div>
<div className="col-span-3 justify-items-center">djklsdfjslkf</div>
    </>
  );
};

export default NotFound;