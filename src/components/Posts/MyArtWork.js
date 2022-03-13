import React from "react";
import { Button, Image } from "../../elements";

import { useHistory } from "react-router-dom";


const MyArtWork = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="grid grid-cols-4 gap-4 bg-yellow-300 py-2">
      <div className="col-start-2 col-span-4">내 포트폴리오</div>
      <div className="col-start-2"><Image shape="myartwork" /></div>
      <div className="col-start-3"><Image shape="myartwork" /></div>
      <div className="row-start-2 col-start-2"><Image shape="myartwork" /></div>
      <div className="row-start-2 col-start-3"><Image shape="myartwork" /></div>
     
</div>
    </>
  );
};

export default MyArtWork;