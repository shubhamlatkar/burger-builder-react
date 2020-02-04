import axios from "axios";

const orderInstance = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/"
  baseURL: "https://burger-builder-898a6.firebaseio.com/"
});

export default orderInstance;
