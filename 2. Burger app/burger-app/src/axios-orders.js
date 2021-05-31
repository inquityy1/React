import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c1a78-default-rtdb.firebaseio.com/",
});

export default instance;
