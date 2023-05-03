import React, { useEffect } from "react";
import "../css/popup.css";

const CurOrderPopUp = ({ curItems, handleSubtract, menu }) => {
    
    /**
     * useEffect hook that logs the current items whenever it changes.
     * 
     * @param {Array} curItems - The array of current items in the order.
     */
    useEffect(() => {
        console.log(curItems);
    }, [curItems]);
    return (
        <div className="cur-item-wrap">
            <h1>CURRENT ORDER</h1>
            {Object.entries(curItems).map(([item, quantity]) => (
                <div key={item} className="cur-item-display">
                    <div>
                        {menu[item][1]}: {quantity}
                        <button onClick={() => handleSubtract(item)}>-</button>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default CurOrderPopUp;
