import { getCookie } from "./cookie";

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_MAGAZINE_API_BASE_URL,
});

const token = getCookie("token");
// axios.defaults.crossDomain = true

export { instance, token };
