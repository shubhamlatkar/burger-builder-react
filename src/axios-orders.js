import axios from "axios";

const orderInstance = axios.create({
  baseURL: "https://8081-d3fbeada-6c4a-4fa9-b680-12e881c9f343.ws-ap01.gitpod.io/"
});

export default orderInstance;
