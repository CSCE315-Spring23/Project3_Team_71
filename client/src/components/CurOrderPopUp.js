import React, { useEffect } from "react";
import "../css/popup.css";

const CurOrderPopUp = ({ curItems, handleSubtract, menu }) => {
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
