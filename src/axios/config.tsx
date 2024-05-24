import axios from "axios";

async function getProducts() {
    const response = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC");

    return response.data;
}

export const api = {
    getProducts
}