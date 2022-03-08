import React from "react";

import { getCookie } from "../shared/cookie";

const Permit = (props) => {

  const is_token = getCookie("token") ? true : false;

  if (is_token) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

export default Permit;