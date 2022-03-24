import axios from "axios";
// import { getCookie } from "../shared/cookie";

const URL = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {},
})

// const token = getCookie("access_token");
const token = sessionStorage.getItem("access_token");

export {URL, token};