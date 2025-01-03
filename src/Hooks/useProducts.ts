import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function getProducts() {
  const response = await axios.get(API_URL);
  return response.data;
}

export function useProducts(){
    const {data} = useQuery({
        queryFn: getProducts,
        queryKey: ['']
    })
    return {data}
}