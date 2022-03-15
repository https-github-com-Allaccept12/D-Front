import React from "react";
import { deleteCookie } from "../shared/cookie";

const LogOut = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    sessionStorage.clear();
    window.location.replace("/");
}

export default LogOut;