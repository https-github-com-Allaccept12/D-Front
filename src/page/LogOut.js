import React from "react";
import { deleteCookie } from "../shared/cookie";

const LogOut = () => {
  deleteCookie("access_token");
  deleteCookie("refresh_token");
  deleteCookie("account_id");
  deleteCookie("nickname");
  sessionStorage.clear();
  sessionStorage.setItem("account_id", 0);
  window.location.replace("/");
};

export default LogOut;
