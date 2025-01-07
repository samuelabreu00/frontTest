import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";
import Products from "../components/productList/ProductList";

const API_URL = import.meta.env.VITE_API_URL;

async function getProducts() {
  const response = await axios.get(API_URL);
  return response.data;
} 

export function useProducts(){
    const {search} = useFilter();
    const searchDeferred = useDeferredValue(search);
    const {data} = useQuery({
        queryFn: getProducts,
        queryKey: ['']
    });
    

    const products = data;
    const filterProducts = products?.filter((product: Products) => product.title.toLowerCase().includes(searchDeferred.toLocaleLowerCase()));
    
    return {
    data: filterProducts
    }
}