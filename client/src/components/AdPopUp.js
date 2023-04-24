import React, { useEffect } from "react";
import "../css/adpopup.css";
const AdPopUp = (stringID, handleClick, setAdPopUp) => {
    const mealid = stringID.stringID + "meal";

    function handleClicker (event) {
        stringID.handleClick(event);
        stringID.setAdPopUp(false);
    }
    
    return (
        <>
        <div>
            <h2>Do you want to make this a meal? Do it...</h2>
            <button
                type="submit"
                name="completed"
                value=""
                id = {mealid}
                onClick={handleClicker}
            >Yes</button>
            <button
                type="submit"
                name="completed"
                value=""
                id = {stringID.stringID}
                onClick={handleClicker}
            >No</button>
        </div>
        </>
    );
};

export default AdPopUp;
