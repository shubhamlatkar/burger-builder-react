import axios from "axios";

import { axiosURL } from "./data/data";

const orderInstance = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/"
  baseURL: axiosURL
});

export default orderInstance;
