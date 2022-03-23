import axios from "axios";
import { getCookie } from "../shared/cookie";

const URL = axios.create({
  baseURL: "http://3.34.185.134",
  headers: {},
})

const token = getCookie("access_token");

export {URL, token};