import React from "react";
import { Button, Title, Text } from "../../elements";

import { Link, Route, Switch, useLocation } from "react-router-dom";

import { DimoSlider } from "../../components";

const DimoCategory = (props) => {
  const { list } = props;
  if (list === "qna")
    return (
      <>
        <div className="fixed right-10 top-32"></div>

        <div className="ml-16">
          <DimoSlider />
        </div>
      </>
    );

  if (list === "shared")
    return (
      <>
        <div className="fixed right-10 top-32"></div>

        <div className="ml-16">
          <DimoSlider />
        </div>
      </>
    );
  else {
    return null;
  }
};

export default DimoCategory;
