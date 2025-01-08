import { createContext, ReactNode, useState } from "react";

interface FilterContextType{
    search: string,
    setSearch: (value: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
    search: '',
    setSearch: () => {},
})

interface ProviderProps{
    children: ReactNode;
}

export function FilterContextProvider({children}: ProviderProps){
    const [search, setSearch] = useState('')

    return(
        <FilterContext.Provider value={{search, setSearch}}>
            {children}
        </FilterContext.Provider>
    )
}