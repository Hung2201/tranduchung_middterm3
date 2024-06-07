import React, { createContext, useState } from "react"

export const SearchContext = createContext();
export const SearchProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");

    return (
        <SearchContext.Provider value={{users, setUsers, text, setText}}>
            {children}
        </SearchContext.Provider>
    )
}