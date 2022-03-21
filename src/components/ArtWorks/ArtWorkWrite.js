import React from "react";
import reactDom from "react-dom";
import { Button } from "../../elements";
import writeButton from "../../static/icons/writeButton.svg";

const ArtWorkWrite = () => {
  return (
    <div>
        <button><img src={writeButton}/></button>
    </div>
  );
};

export default ArtWorkWrite;