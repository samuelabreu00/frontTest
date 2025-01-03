import { useContext } from "react";
import { FilterContext } from "../Context/filterContext";

export function useFilter(){
    return useContext(FilterContext)
}