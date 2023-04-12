import React from "react";

const CurOrderPopUp = ({ curItems, handleSubtract, menu }) => {


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