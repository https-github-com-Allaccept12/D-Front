import React from "react";
import { Button } from "../../elements";
import PostDimo from "./PostDimo";

import { useHistory } from "react-router-dom";

const p = [{"d": "1"}, {"d":"2"}, {"d":"3"}, {"d":"4"}, {"d":"5"}, {"d":"6"}, {"d":"7"},  {"d":"8"}, {"d":"9"}, {"d":"10"}]

const DimoQNAList = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-row justify-center items-center flex-wrap">

        {p.map(n => { return <PostDimo /> }) }
    </div>
  );
};

export default DimoQNAList;