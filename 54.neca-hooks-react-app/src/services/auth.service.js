import axios from "axios";
import { API_URL } from "../consts";

const getUsers = () => {
  return axios.get(API_URL + "users");
};

const login = async (username, password) => {
  try {
    const response = await getUsers();
    const user = response.data.find((u) => {
      return u.username === username && u.password === password;
    });

    if (!user) {
      throw new Error("Wrong credentials");
    }

    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  getCurrentUser,
  login,
  logout,
};
