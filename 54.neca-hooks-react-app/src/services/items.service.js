import axios from "axios";
import { API_URL } from "../consts";

const getItems = () => {
  return axios.get(API_URL + "items");
};

const getItem = async (id) => {
  const parsedId = Number(id)
  const response = await getItems();
  const item = response.data.find((i) => {
    return i.id === parsedId;
  });
  return item;
}

const deleteItem = (id) => {
  return axios.delete(API_URL + "items/" + id);
};

const updateItem = (item) => {
  return axios.put(API_URL + `items/${item.id}`, item);
};

const addItem = (item) => {
  return axios.post(API_URL + 'items', item);
}

export default {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};
