import React, { createContext, useState } from "react";

export const CurOrderContext = createContext();

export const CurOrderContextProvider = (props) => {
    const [totalCost, setTotalCost] = useState(0);
    const [curItems, setCurItems] = useState({});


    

    return (
        <CurOrderContext.Provider value={{ totalCost, setTotalCost, curItems, setCurItems }}>
            {props.children}
        </CurOrderContext.Provider>
    )
}