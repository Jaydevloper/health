import { createContext, useState } from "react";

export const  Contextvalue = createContext();

export const Context = ({children}) =>{
    const[filter,setFilter] = useState()
    return <Contextvalue.Provider value={{filter,setFilter}}>{children}</   Contextvalue.Provider>
}