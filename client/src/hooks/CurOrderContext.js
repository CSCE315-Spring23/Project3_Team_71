import React, { createContext, useState } from "react";

export const CurOrderContext = createContext();

export const CurOrderContextProvider = (props) => {
    /**
    *
    * The total cost of the items in the cart
    * @type {number}
    */
    const [totalCost, setTotalCost] = useState(0);

    /**
    *
    * The current items in the cart
    * @type {Object.<string, number>}
    */
    const [curItems, setCurItems] = useState({});


    

    return (
        <CurOrderContext.Provider value={{ totalCost, setTotalCost, curItems, setCurItems }}>
            {props.children}
        </CurOrderContext.Provider>
    )
}