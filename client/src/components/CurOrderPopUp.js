import React, { useEffect } from "react";
import "../css/popup.css";

const CurOrderPopUp = ({ curItems, handleSubtract, menu }) => {

    useEffect(() => {
        console.log(curItems);
    }, [curItems]);
    return (
        <div className="cur_item_wrap">
            <h2>Current Order:</h2>
            {Object.entries(curItems).map(([item, quantity]) => (
                <div key={item} className="cur_item_display">
                    <div >
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
