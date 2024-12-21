import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function getProducts() {
  const response = await axios.get(API_URL);
  return response.data;
}

export const api = {
  getProducts,
};
