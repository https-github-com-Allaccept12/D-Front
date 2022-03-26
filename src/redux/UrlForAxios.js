import axios from "axios";
import { getCookie } from "../shared/cookie";

const URL = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {},
});

// const token = getCookie("access_token");
const token = sessionStorage.getItem("access_token");
const account_id = sessionStorage.getItem("account_id");
// const account_id = getCookie("account_id");

export { URL, token, account_id };
